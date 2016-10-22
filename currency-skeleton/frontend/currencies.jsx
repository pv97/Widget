import React from 'react';

const Currencies = ({ rates }) => (
  <ul>
    {
      Object.keys(rates).map(currency => (
        <li key={currency}
            className={ rates[currency] < 1 ? "red" : "green" }>
              {currency} {rates[currency]}
        </li>
      ))
    }
  </ul>
);

export default Currencies;