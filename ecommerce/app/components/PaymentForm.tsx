'use client';

import React, { useEffect, useState } from "react";
import { Products, StateProps } from "../../types";
import { FormattedPrice } from "./FormattedPrice";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { resetCart, saveOrder } from "@/redux/shoppingSlice";

const PaymentForm = () => {
  const [totalAmt, setTotalAmt] = useState(0);
  const dispatch = useDispatch();
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

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

  const { data: session } = useSession();
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: productData, email: session?.user?.email })
      }
    );
    const data = await response.json();

    if (response.ok) {
      await dispatch(saveOrder({ order: productData, id: data.id }));
      stripe?.redirectToCheckout({ sessionId: data.id });
      dispatch(resetCart());
    } else {
      throw new Error('Failed to process order');
    }
  }

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
          <button
            onClick={handleCheckout}
            className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 cursor-pointer duration-200">Proceed to payment</button> :
          <div className="">
            <button className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 cursor-not-allowed duration-200">Proceed to payment</button>
            <p className="text-base mt-1 text-red-500 font-semibold animate-bounce">Please login to continue</p>
          </div>}
      </div>
    </div>
  )
}

export default PaymentForm;
