import React from 'react';

interface Amount {
  amount: number;
}

export const FormattedPrice = ({ amount }: Amount) => {
  const formattedAmount = new Number(amount).toLocaleString(
    'en-US',
    { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })

  return <span>{formattedAmount}</span>
}
