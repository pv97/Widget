import React from 'react';
import Currencies from './currencies';

class Widget extends React.Component {
  constructor(props) {
    super(props);

    this.state = { baseCurrency: "CNY", rates: {} };
    this.fetchRates(this.state.baseCurrency);
  }

  fetchRates(baseCurrency) {
    $.ajax({
      method: 'GET',
      url: `http://api.fixer.io/latest?base=${baseCurrency}`,
      success: (response) => {
        this.setState({ rates: response.rates, baseCurrency });
      }
    });
  }

  render() {
    const rates = ["CNY", "GBP", "JPY", "CAD", "EUR", "USD"];
    const rateOptions = rates.map(currency => (
      <div key={currency} onClick={this.fetchRates.bind(this, currency)}>{currency}</div>
    ));

    return(
      <div>
        <h1>Currency Exchange Rates for {this.props.name}</h1>
        <h3>Base Currency: {this.state.baseCurrency}</h3>
        <span>Get Rates: {rateOptions}</span>
        <Currencies rates={this.state.rates} />
      </div>
    )
  }
}

export default Widget;