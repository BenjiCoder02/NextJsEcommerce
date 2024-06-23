import React from 'react';
import { Container } from './Container';
import { Logo } from './Logo';
import { BsCart } from "react-icons/bs";
import { FaSearch } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';

export const Header = () => {
  return (
    <div className='bg-bodyColor h-20'>
      <Container className='h-full flex items-center md:gap-x-5 justify-between md:justify-start'>
        <Logo />
        <div className='group bg-white w-full hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600'>
          <FaSearch className='text-gray-500 group-focus-within:text-darkText duration-200' />
          <input
            type='text'
            placeholder='Search for products'
            className='placeholder:text-sm flex-1 outline-none'
          />
        </div>
        <div className='bg-bgLight text-gray-500 flex items-center justify-center p-1.5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-orange-500 duration-200'>
          <AiOutlineUser className='text-2xl' />
          <p className='text-sm font-semibold'>Login/Register</p>
        </div>
        <div className='border-black hover:border-orange-600 duration-200 relative bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5'>
          <BsCart className='text-2xl' />
          <p className='text-sm font-semibold'>$0.00</p>
          <span className='bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black'>
            0
          </span>
        </div>
      </Container>
    </div>
  );
}
