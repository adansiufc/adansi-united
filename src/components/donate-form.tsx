"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { CreditCard, AlertCircle, Check } from "lucide-react";

export const DonateForm = () => {
  const [amount, setAmount] = useState("0.00");
  const [network, setNetwork] = useState("VIS");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currency, setCurrency] = useState("GHS");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const isMobileMoney = ["MTN", "VOD", "AIR"].includes(network);
  const isCard = ["VIS", "MAS"].includes(network);

  const handleDonate = async () => {
    setErrorMessage("");
    
    if (parseFloat(amount) <= 0) {
      setErrorMessage("Please enter a valid amount.");
      return;
    }

    if (isMobileMoney && !phoneNumber) {
      setErrorMessage("Please enter your phone number for mobile money payments.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          network,
          phoneNumber: isMobileMoney ? phoneNumber : undefined,
          currency: currency
        }),
      });

      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch {
        setErrorMessage('Invalid response from payment gateway. Please try again.');
        setIsLoading(false);
        return;
      }

      if (isCard && data.form_url) {
        window.location.href = data.form_url;
      } else if (isCard && !data.form_url) {
        setErrorMessage(`Card payment error: ${data.resp_desc || data.message || 'No payment form URL received'}`);
        setIsLoading(false);
      } else if (isMobileMoney && data.resp_code === '015') {
        setShowSuccessDialog(true);
      } else if (data.error) {
        setErrorMessage(data.error || 'Could not initiate payment. Please try again.');
        setIsLoading(false);
      } else if (data.resp_code && data.resp_code !== '000') {
        setErrorMessage(`Payment failed: ${data.resp_desc || data.resp_code}`);
        setIsLoading(false);
      } else {
        setErrorMessage('Unexpected response from payment gateway. Please try again.');
        setIsLoading(false);
      }
    } catch (error) {
      let message = 'An unknown error occurred. Please try again.';
      if (error instanceof Error) {
        message = `An error occurred: ${error.message}. Please try again.`;
      } else if (typeof error === 'string') {
        message = error;
      }
      setErrorMessage(message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="grid gap-4 py-4">
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">{errorMessage}</p>
          </div>
        )}
        
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="amount" className="text-right font-medium">
            Amount
          </label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="col-span-3"
            min="1"
            step="0.01"
            disabled={isLoading}
          />
        </div>
        
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="currency" className="text-right font-medium">
            Currency
          </label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="col-span-3 border border-gray-300 rounded-md p-2 bg-white"
            disabled={isLoading}
          >
            <option value="GHS">GHS</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="network" className="text-right font-medium">
            Payment Method
          </label>
          <select
            id="network"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
            className="col-span-3 border border-gray-300 rounded-md p-2 bg-white"
            disabled={isLoading}
          >
            <optgroup label="Card Payments">
              <option value="VIS">VISA</option>
              <option value="MAS">MasterCard</option>
            </optgroup>
            <optgroup label="Mobile Money">
              <option value="MTN">MTN Mobile Money</option>
              <option value="VOD">Telecel Cash</option>
              <option value="AIR">AirtelTigo Money</option>
            </optgroup>
            <optgroup label="Bank">
              <option value="BNK">Bank Transfer</option>
            </optgroup>
          </select>
        </div>
        
        {isMobileMoney && (
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="phoneNumber" className="text-right font-medium">
              Phone Number
            </label>
            <Input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g., 0244123456"
              className="col-span-3"
              disabled={isLoading}
            />
          </div>
        )}
        
        {isCard && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800">
              You will be redirected to a secure payment page to complete your card payment.
            </p>
          </div>
        )}
      </div>
      
      <DialogFooter>
        <Button
          onClick={handleDonate}
          className="w-full relative overflow-hidden transition-all duration-200"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-3">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Processing...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <CreditCard className="h-4 w-4" />
              Proceed to Payment
            </span>
          )}
        </Button>
      </DialogFooter>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">Payment Request Sent</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Please check your phone to approve the transaction.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="w-full sm:w-auto"
            >
              Got it
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};