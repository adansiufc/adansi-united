"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { CreditCard } from "lucide-react";
import { DonateForm } from "../donate-form";

const DonateButton = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    if (isOpen) {
      const updateDateTime = () => {
        setCurrentDateTime(new Date().toLocaleString());
      };
      updateDateTime();
      const intervalId = setInterval(updateDateTime, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={className}>Donate Now</Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] max-w-md rounded-xl">
        <DialogHeader>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4">
              <CreditCard className="w-10 h-10 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold">Make a Donation</DialogTitle>
            <DialogDescription className="mt-2">
              {currentDateTime}
            </DialogDescription>
          </div>
        </DialogHeader>
        <DonateForm />
      </DialogContent>
    </Dialog>
  );
};

export default DonateButton;