import React from 'react';
import styled from '@emotion/styled';
import useCurrentCurrency from '../../hooks/useCurrentCurrency';
import { Container } from '../../common';

const StyledContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
  `;

const StyledHeader = styled.header`
  background-color: #333;
  color: aliceblue;
  padding: 15px 0;
`;

function Header() {
  const { currentCurrency, timeUpdateCurrentCurrency, isLoading } = useCurrentCurrency();

  if (isLoading) {
    return (
      <StyledHeader>
        <StyledContainer>Please wait, currency is loading...</StyledContainer>
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      <StyledContainer>
        <div>
          Current UAH exchange rate on
          {' '}
          <span>{timeUpdateCurrentCurrency}</span>
        </div>
        {currentCurrency.map(({ currency, rate }) => (
          <div key={currency}>
            <span>{rate}</span>
            <span style={{ color: 'gold' }}>{currency}</span>
          </div>
        ))}
      </StyledContainer>
    </StyledHeader>
  );
}

export default Header;
