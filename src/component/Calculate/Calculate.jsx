import React from 'react';

import { Heading } from '../../common';
import CalculateItem from './CalculateItem/CalculateItem';
import './Calculate.scss';
import { useConvertCurrency } from '../../hooks/useConvertCurrency';

function Calculate() {
  const {
    currencies,
    toCurrency,
    fromCurrency,
    toAmount,
    fromAmount,
    setFromCurrency,
    setToCurrency,
    handleFromAmountChange,
    handleToAmountChange,
    isFetching,
  } = useConvertCurrency();

  return (
    <div className="calculate">
      <Heading variant="h3">Currency converter</Heading>
      <CalculateItem
        amount={fromAmount}
        onChangeAmount={(e) => handleFromAmountChange(e.target.value)}
        onChangeCurrency={(e) => {
          setFromCurrency(e.target.value);
        }}
        selectedCurrency={fromCurrency}
        convertCurrency={currencies}
      />
      <div className={isFetching ? 'convert-icon convert-icon--loading' : 'convert-icon'} />
      <CalculateItem
        amount={toAmount}
        onChangeAmount={(e) => handleToAmountChange(e.target.value)}
        onChangeCurrency={(e) => {
          setToCurrency(e.target.value);
        }}
        selectedCurrency={toCurrency}
        convertCurrency={currencies}
      />
    </div>
  );
}

export default Calculate;
