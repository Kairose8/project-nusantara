import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigateBack from "../components/NavigateBack";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  const [usdToIdrRate, setUsdToIdrRate] = useState(0);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await axios.get(
          "https://api.currencyapi.com/v3/rates/convert?from=USD&to=IDR&apikey=cur_live_GiAMYcX0i27qZA6iLcpmAE6mW7GnU5u2V9zC9TfV"
        );
        const conversionRate = response.data.result;
        setUsdToIdrRate(conversionRate);
      } catch (error) {
        console.error("Error fetching conversion rate:", error);
      }
    };

    fetchConversionRate();
  }, []);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleConvert = () => {
    const convertedAmount = amount * usdToIdrRate;
    setResult(convertedAmount);
  };

  return (
    <div className="h-screen container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        USD to IDR Converter
      </h1>
      <div className="flex items-center justify-center mb-4">
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="appearance-none block w-40 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        />
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded ml-4"
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold mb-2">
          {amount} USD = {result} IDR
        </p>
        <p className="text-lg">1 USD = {usdToIdrRate} IDR</p>
        <NavigateBack />
      </div>
    </div>
  );
}
