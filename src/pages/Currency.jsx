import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigateBack from "../components/NavigateBack";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  const [usdToIdrRate, setUsdToIdrRate] = useState(0);

  useEffect(() => {
    const fetchConversionRates = async () => {
      try {
        const response = await axios.get(
          "https://api.currencyapi.com/v3/rates/convert?from=USD&to=IDR,EUR,GBP,JPY,CNY&apikey=cur_live_GiAMYcX0i27qZA6iLcpmAE6mW7GnU5u2V9zC9TfV"
        );
        const rates = response.data.result;
        setUsdToIdrRate(rates.IDR);
        setEurToIdrRate(rates.EUR);
        setGbpToIdrRate(rates.GBP);
        setJpyToIdrRate(rates.JPY);
        setCnyToIdrRate(rates.CNY);
      } catch (error) {
        console.error("Error fetching conversion rates:", error);
      }
      console.log(response.data);
    };

    fetchConversionRates();
  }, []);

  const [eurToIdrRate, setEurToIdrRate] = useState(0);
  const [gbpToIdrRate, setGbpToIdrRate] = useState(0);
  const [jpyToIdrRate, setJpyToIdrRate] = useState(0);
  const [cnyToIdrRate, setCnyToIdrRate] = useState(0);

  return (
    <div className="h-screen container mx-auto p-4">
      <div className="bg-myColor-500 p-12 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4">
          Today's Exchange Rates
        </h1>
        <div className="flex items-center justify-center mb-4">
          <div className="text-center">
            <br/>
            <br/>
            <p className="text-lg text-stone-300">1 USD = {usdToIdrRate} IDR</p>
            <p className="text-lg text-stone-300">1 EUR = {eurToIdrRate} IDR</p>
            <p className="text-lg text-stone-300">1 GBP = {gbpToIdrRate} IDR</p>
            <p className="text-lg text-stone-300">1 JPY = {jpyToIdrRate} IDR</p>
            <p className="text-lg text-stone-300">1 CNY = {cnyToIdrRate} IDR</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <NavigateBack />
      </div>
    </div>
  );
}
