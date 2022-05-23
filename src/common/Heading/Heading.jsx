import React from 'react';
import styled from '@emotion/styled';

const styledComponent = {
  h1: styled.h1`font-size: 3rem`,
  h2: styled.h2`font-size: 2.5rem`,
  h3: styled.h3`font-size: 2rem`,
  h4: styled.h4`font-size: 1.8rem`,
  h5: styled.h5`font-size: 1.25rem`,
  h6: styled.h6`font-size: 1rem`,
};

function Heading({ variant, children }) {
  const Tag = styledComponent[variant];
  return <Tag>{children}</Tag>;
}

export default Heading;
