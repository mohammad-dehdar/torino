"use client";
import PaymentContent from '@/components/templates/payment';
import { Suspense } from 'react';

function Payment() {
  return (
    <Suspense>
      <PaymentContent />
    </Suspense>
  )
}

export default Payment;