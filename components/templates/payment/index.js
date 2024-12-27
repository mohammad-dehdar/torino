'use client';

import useQuery from '@/core/hooks/query';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

function PaymentContent() {
  const { getQuery } = useQuery();
  const status = getQuery('status');

  if (status === 'success')
    return (
      <div className="min-h-screen">
        <div className="flex max-sm:flex-col mt-40 md:mt-0 mx-10 md:mx-0 items-center justify-center">
          <Image src="/images/successCheck.svg" width={800} height={800} alt="پرداخت موفق" />
          <div className="flex flex-col items-center gap-5">
            <p className="text-lg md:text-3xl text-gray-500 font-semibold">پرداخت شما با موفقیت انجام شد</p>
            <Link
              href="/profile/my-tours"
              className="w-fit bg-primary px-6 py-1 text-lg md:text-3xl rounded-lg text-white font-semibold"
            >
                به پروفایل بروید
            </Link>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <p>پرداخت انجام نشد</p>
    </div>
  );
}

export default PaymentContent;