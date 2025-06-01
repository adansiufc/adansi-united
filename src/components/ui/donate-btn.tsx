import React from "react";
import { Button } from "./button";
import Link from "next/link";

const DonateButton = ({ className = "" }: { className?: string }) => {
  // appsNmobile payment link
  const redirectTo =
    process.env.NODE_ENV === "development"
      ? "https://vposqr.anmgw.com/#/pay/T1l4bWpFUDlDcmJ0VlZCaVpjLTNzd3xkWk1kQTNKZDd5aEEyMVJEWUx2WHdjdnVoa0docnJBNlBKRkZuYmYwTTI0eWhaTjlVUkpkUjljeWt2MHNZTlF1cmFWSmU4MHNvN0ZvVHp5NmFXVVFjN244c0duSzlmOHh5T214YXpRSEFyb3daYzZfT1ZCMm5SOWJuT2hHSFhVMEM3TnZmd0dSSjJGRWV0bW04aTNwZVBndlcwVzRhUTlUSFFRT2JjajlKRnItNTd0a1NMU1BYNV9zNHhrNGlUNGNlSy1JZDVaZDhkajYtSFpRRGtTdGh3eE4zOEFkcWRzd2JfV0RfNjBPMzc4LWhXLXlMSTlNbWZKd2Y5WWZ1Q0g1MTBGMDQxU29rbWR3cXk0WGJabW13N3poWlhVS21kSFNkSVJ1UnRxNzJ0VnBNT09RcUktVFFXOGdvSlBjbEgxWVFiRGJuM1RGXy00OVQ2YkFWY2R4UTNhSWtZXzRhemlhMlI5bG56TnZ3OHM"
      : "https://vposqr.anmgw.com/#/pay/T1l4bWpFUDlDcmJ0VlZCaVpjLTNzd3xkWk1kQTNKZDd5aEEyMVJEWUx2WHdjdnVoa0docnJBNlBKRkZuYmYwTTI0eWhaTjlVUkpkUjljeWt2MHNZTlF1cmFWSmU4MHNvN0ZvVHp5NmFXVVFjN244c0duSzlmOHh5T214YXpRSEFyb3daYzZfT1ZCMm5SOWJuT2hHSFhVMEM3TnZmd0dSSjJGRWV0bW04aTNwZVBndlcwVzRhUTlUSFFRT2JjajlKRnItNTd0a1NMU1BYNV9zNHhrNGlUNGNlSy1JZDVaZDhkajYtSFpRRGtTdGh3eE4zOEFkcWRzd2JfV0RfNjBPMzc4LWhXLXlMSTlNbWZKd2Y5WWZ1Q0g1MTBGMDQxU29rbWR3cXk0WGJabW13N3poWlhVS21kSFNkSVJ1UnRxNzJ0VnBNT09RcUktVFFXOGdvSlBjbEgxWVFiRGJuM1RGXy00OVQ2YkFWY2R4UTNhSWtZXzRhemlhMlI5bG56TnZ3OHM";
  // Paystack payment link (commented out)
  // const redirectTo =
  //   process.env.NODE_ENV === "development"
  //     ? "https://paystack.com/pay/adansi-united-test"
  //     : "https://paystack.com/pay/adansi-united";
  return (
    <Button asChild className={className}>
      <Link href={redirectTo}>Donate Now</Link>
    </Button>
  );
};

export default DonateButton;
