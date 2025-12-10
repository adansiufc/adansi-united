import { DonateForm } from "@/components/donate-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DonatePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Make a Donation</CardTitle>
        </CardHeader>
        <CardContent>
          <DonateForm />
        </CardContent>
      </Card>
    </div>
  );
}