import React from 'react';
import './CalculateItem.scss';

function CalculateItem({
  convertCurrency, selectedCurrency, onChangeCurrency, amount, onChangeAmount,
}) {
  const selectOption = Object.keys(convertCurrency).map((option) => (
    <option key={option} value={option}>{option}</option>));

  return (
    convertCurrency && (
    <div className="custom-group">
      <input className="custom-group-input" value={amount} onChange={onChangeAmount} type="number" />
      <select className="custom-group-select" value={selectedCurrency} onChange={onChangeCurrency}>
        {selectOption}
      </select>
    </div>
    )
  );
}

export default CalculateItem;
