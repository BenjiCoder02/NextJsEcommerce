'use client';

import React, { useEffect, useState } from "react";
import { Products, StateProps } from "../../types";
import { FormattedPrice } from "./FormattedPrice";
import { useSelector } from "react-redux";

const PaymentForm = () => {
  const [totalAmt, setTotalAmt] = useState(0);
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state?.shopping
  )

  useEffect(() => {
    let amt = 0;
    productData?.map((item: Products) => {
      amt += item.price * item.quantity;
      return
    });
    setTotalAmt(amt);
  }, [productData]);


  return (
    <div className="w-full bg-white p-4">
      <h2>Cart Totals</h2>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase font-medium">Subtotal</p>
          <p><FormattedPrice amount={totalAmt} /></p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase font-medium">Shipping</p>
          <p><FormattedPrice amount={20} /></p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase font-medium">Total</p>
          <p><FormattedPrice amount={totalAmt + 20} /></p>
        </div>
        {userInfo ?
          <button className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 cursor-pointer duration-200">Proceed to payment</button> :
          <div className="">
            <button className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 cursor-not-allowed duration-200">Proceed to payment</button>
            <p className="text-base mt-1 text-red-500 font-semibold animate-bounce">Please login to continue</p>
          </div>}
      </div>
    </div>
  )
}

export default PaymentForm;
