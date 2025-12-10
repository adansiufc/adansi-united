"use client";
import React, { FormEvent, useState } from "react";
import WidthConstraint from "../ui/width-constraint";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "sonner";
import { sendEmail } from "@/lib/utils/send-mail";
import { RECIPIENT_EMAIL } from "@/lib/constants";
import { Loader } from "lucide-react";

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmails = async (userData: UserData) => {
    await sendEmail({
      email: RECIPIENT_EMAIL,
      name: "Adansi United",
      message: `
        A new user has registered with the following details:\n\n
        Name: ${userData.firstName} ${userData.lastName}\n
        Email: ${userData.email}\n
        Phone Number: ${userData.phoneNumber}\n\n
        Please verify their registration.
      `,
    });

    // Send confirmation email to the user
    await sendEmail({
      email: userData.email,
      name: `${userData.firstName} ${userData.lastName}`,
      message: `
        Hello ${userData.firstName},\n\n
        Thank you for registering on our platform!\n
        We are excited to have you onboard and look forward to providing you with the best experience possible.\n
        If you have any questions, feel free to reach out to us.\n\n
        Best Regards,\n
        The Adansi United
      `,
    });
  };

  const saveUserRegistration = async (slug: string, data: UserData) => {
    const docRef = doc(db, `register/${slug}`);
    await setDoc(docRef, data);
  };

  const registerUser = async (e: FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phoneNumber) {
      toast.error("Please fill in all fields.");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber,
    };
    setLoading(true);
    try {
      const slug = email
        .split("@")[0]
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
      await saveUserRegistration(slug, userData);
      await sendEmails(userData);
      setLoading(false);
      toast.success(
        "Registration successful! Check your email for confirmation."
      );

      // Clear form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
    } catch (error) {
      setLoading(false);
      console.error("Error registering user:", error);
      toast.error(
        "There was an error with your registration. Please try again."
      );
    }
  };

  return (
    <section
      id="register"
      className="scroll-m-20 py-20 space-y-10 lg:py-32 bg-gray-100 "
    >
      <h2 className="text-3xl lg:text-4xl text-center uppercase text-[#276C25]">
        Register
      </h2>
      <p className="text-center">
        Join the Adansi Academy Sports Village today! Fill out the registration
        form to become a part of our thriving community.
      </p>
      <WidthConstraint className="max-w-[800px] space-y-10 px-0">
        <div className="">
          <Card className="py-10 lg:p-10">
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>
                Please fill in the form below to register.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form
                onSubmit={registerUser}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4"
              >
                <fieldset className="space-y-2">
                  <Label>First Name</Label>
                  <Input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="space-y-2">
                  <Label>Last Name</Label>
                  <Input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="space-y-2 lg:col-span-2">
                  <Label>Email</Label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className="space-y-2 lg:col-span-2">
                  <Label>Phone Number</Label>
                  <Input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </fieldset>
                <div className="pt-5 lg:col-span-2 flex justify-center">
                  <Button
                    className="w-[250px]"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? <Loader className="animate-spin" /> : "Submit"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </WidthConstraint>
    </section>
  );
};

export default Register;
