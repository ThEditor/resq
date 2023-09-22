import { useRouter } from 'next/router';
import * as React from 'react';

import TextButton from '@/components/buttons/TextButton';
import Seo from '@/components/Seo';

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Seo />
      <main className='flex h-screen flex-col items-center justify-center gap-4'>
        <h1>ResQ</h1>
        <div className='flex w-1/4 gap-4'>
          <TextButton
            onClick={() => router.push('/login')}
            className='flex-grow'
          >
            Log In
          </TextButton>
          <TextButton
            onClick={() => router.push('/signup')}
            className='flex-grow'
          >
            Sign Up
          </TextButton>
        </div>
      </main>
    </>
  );
}
