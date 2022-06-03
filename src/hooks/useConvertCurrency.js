import { useState } from 'react';
import { useFetchCurrencyQuery } from '../api/sliceAPI';

export function useConvertCurrency() {
  const [fromCurrency, setFromCurrency] = useState('UAH');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const { data, isLoading, isFetching } = useFetchCurrencyQuery(fromCurrency);
  const currencies = !isLoading && data.conversion_rates;

  let toAmount;
  let fromAmount;

  if (!isLoading) {
    if (amountInFromCurrency) {
      fromAmount = amount;
      toAmount = amount * currencies[toCurrency];
    } else {
      toAmount = amount;
      fromAmount = amount / currencies[toCurrency];
    }
  }
  const handleFromAmountChange = (e) => {
    setAmount(e);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e) => {
    setAmount(e);
    setAmountInFromCurrency(false);
  };

  return {
    currencies,
    fromAmount,
    fromCurrency,
    toAmount,
    toCurrency,
    setFromCurrency,
    setToCurrency,
    handleToAmountChange,
    handleFromAmountChange,
    isFetching,
  };
}
