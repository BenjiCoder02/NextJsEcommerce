'use client'

import React, { useEffect, useState } from 'react';
import { Container } from './Container';
import { Logo } from './Logo';
import { BsCart } from "react-icons/bs";
import { FaSearch } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { useSession, signIn, signOut } from 'next-auth/react';
import { FiLogOut } from 'react-icons/fi';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { Products, StateProps } from '../../types';
import { FormattedPrice } from './FormattedPrice';
import Link from 'next/link';

export const Header = () => {
  const { data: session } = useSession();
  const { productData } = useSelector((state: StateProps) => state.shopping);

  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData.map((item: Products) => {
      amt += item.price * item.quantity;
      return
    })
    setTotalAmt(amt);
  }, [productData]);

  return (
    <div className='bg-bodyColor h-20 sticky top-0 z-50'>
      <Container className='h-full flex items-center md:gap-x-5 justify-between md:justify-start max-w-screen-xl mx-auto px-4 xl:px-0 py-10'>
        <Logo />
        <div className='group bg-white w-full hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600'>
          <FaSearch className='text-gray-500 group-focus-within:text-darkText duration-200' />
          <input
            type='text'
            placeholder='Search for products'
            className='placeholder:text-sm flex-1 outline-none'
          />
        </div>
        {!session?.user && <div onClick={signIn} className='cursor-pointer bg-bgLight text-gray-500 flex items-center justify-center p-1.5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-orange-500 duration-200'>
          <AiOutlineUser className='text-2xl' />
          <p className='text-sm font-semibold'>Login/Register</p>
        </div>}
        <Link href={'/cart'}>
          <div className='border-black hover:border-orange-600 duration-200 relative bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5'>
            <BsCart className='text-2xl' />
            <p className='text-sm font-semibold'>
              <FormattedPrice amount={totalAmt ? totalAmt : 0} />
            </p>
            <span className='bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black'>
              {productData ? productData?.length : 0}
            </span>
          </div>
        </Link>
        {session?.user?.image && (
          <Image
            className='rounded-full object-cover w-50 h-50'
            src={session?.user?.image as string}
            alt='user-image'
            height={50}
            width={50}
          />
        )}
        {session?.user && !session?.user?.image && (
          <div className='w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center text-white text-[20px]'>
            {session?.user?.name?.charAt(0)}
          </div>
        )}
        {session?.user &&
          <div onClick={signOut} className='px-2 gap-x-1 cursor-pointer bg-bgLight text-gray-500 flex items-center justify-center p-1.5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-orange-500 duration-200'>
            <FiLogOut className='text-2xl' />
            <p className='text-sm font-semibold'>Logout</p>
          </div>}
      </Container>
    </div>
  );
}
