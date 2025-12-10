import ThankYouMessage from '@/components/thank-you-message';
import Link from 'next/link';
import { Suspense } from 'react';

export default function PaymentSuccessPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <Suspense fallback={<div>Loading...</div>}>
        <ThankYouMessage />
      </Suspense>
      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </main>
  );
}