'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react'; // Import React
import { useEffect, useState } from 'react';

const ThankYouMessage: React.FC = () => {
  const searchParams = useSearchParams();
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (searchParams.get('donation_complete') !== null) {
      setShowThankYou(true);
    }
  }, [searchParams]);

  if (!showThankYou) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'green',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        zIndex: 1000,
      }}
    >
      Thank you for your donation!
    </div>
  );
};

export default ThankYouMessage;