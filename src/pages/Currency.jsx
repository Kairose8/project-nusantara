import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Currency() {
  const [currencies, setCurrencies] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(0);

  useEffect(() => {
    axios
      .get(`https://api.currencyapi.com/v3/latest?api_key=cur_live_GiAMYcX0i27qZA6iLcpmAE6mW7GnU5u2V9zC9TfV`)
      .then((response) => response.data)
      .then((data) => setCurrencies(data.data));
  }, []);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleConvert = () => {
    const fromRate = currencies[fromCurrency].value;
    const toRate = currencies[toCurrency].value;
    const result = amount * (toRate / fromRate);
    setResult(result.toFixed(2));
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Currency Converter</h1>
      <form>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              From
            </label>
            <select
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
              className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            >
              {Object.keys(currencies).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              To
            </label>
            <select
              value={toCurrency}
              onChange={handleToCurrencyChange}
              className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            >
              {Object.keys(currencies).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleConvert}
        >
          Convert
        </button>
      </form>
      <p className="text-lg font-bold mt-4">
        {amount} {fromCurrency} = {result} {toCurrency}
      </p>
    </div>
  );
}