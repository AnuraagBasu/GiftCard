import React from 'react';

import BarLoader from './BarLoader';

export const Button = ({ children, className, loading, ...restProps }) => (
  <button
    className={`stylisedBtn className ${loading ? 'loading' : ''}`}
    {...restProps}
  >
    {loading ? <BarLoader /> : children}
  </button>
);
