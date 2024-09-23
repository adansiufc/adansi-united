import React from "react";
import { Button } from "./button";
import Link from "next/link";

const DonateButton = ({ className = "" }: { className?: string }) => {
  const redirectTo =
    process.env.NODE_ENV === "development"
      ? "https://paystack.com/pay/adansi-united-test"
      : "https://paystack.com/pay/adansi-united";
  return (
    <Button asChild className={className}>
      <Link href={redirectTo}>Donate Now</Link>
    </Button>
  );
};

export default DonateButton;
