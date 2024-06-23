import Link from 'next/link';
import React from 'react';

export const Logo = () => {
  return (
    <Link href="/">
      <h3 className='text-3xl font-semibold hover:text-orange-500 cursor-pointer duration-200'>
        Brandify
      </h3>
    </Link>
  );
}
