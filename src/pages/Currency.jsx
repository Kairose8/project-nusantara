import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigateBack from "../components/NavigateBack";

export default function CurrencyConverter() {
  const [currencyRates, setCurrencyRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [idrEquivalent, setIdrEquivalent] = useState(0);

  useEffect(() => {
    const fetchConversionRates = async () => {
      try {
        const response = await axios.get(
          `https://open.er-api.com/v6/latest/${selectedCurrency}`
        );
        const rates = response.data.rates;
        setCurrencyRates(rates);
      } catch (error) {
        console.error("Error fetching conversion rates:", error);
      }
    };

    fetchConversionRates();
  }, [selectedCurrency]);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  useEffect(() => {
    const idrValue = amount * currencyRates.IDR;
    setIdrEquivalent(idrValue);
  }, [amount, currencyRates]);

  const formatIDRAmount = (amount) => {
    return new Intl.NumberFormat("id-ID").format(Math.round(amount));
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-center justify-center">
      {/* header */}
      <div className="flex flex-col -mt-40 items-center text-center mb-8">
        <div className="w-4/5 text-4xl md:text-5xl items-center font-bold text-white">
          <p>Be a Millionaire!</p>
        </div>
        <div className="font-sans md:text-xl text-white">
          <p>You are a Millionaire here if you have $65</p>
          <p>Count your money</p>
        </div>
      </div>

      {/* tool */}
      <div className="h-56 bg-myColor-500 p-8 rounded-lg shadow-md w-5/6">
        <h1 className="text-3xl font-bold text-center mb-4">
          Today's Exchange Rates
        </h1>
        <div className="flex items-center justify-center mb-4">
          <select
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="mr-2 p-2 border border-gray-400 rounded-md focus:outline-none"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="CNY">CNY</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="HKD">HKD</option>
            <option value="SGD">SGD</option>
          </select>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="p-2 border border-gray-400 rounded-md focus:outline-none"
            placeholder="Enter amount"
          />
        </div>
        <p className="text-lg text-center mb-4">
          {formatIDRAmount(amount)} {selectedCurrency} ={" "}
          {formatIDRAmount(idrEquivalent)} IDR
        </p>
      </div>
      <NavigateBack />
    </div>
  );
}
