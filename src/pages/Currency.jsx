import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigateBack from "../components/NavigateBack";

export default function CurrencyConverter() {
  const [usdToIdrRate, setUsdToIdrRate] = useState(0);
  const [eurToIdrRate, setEurToIdrRate] = useState(0);
  const [gbpToIdrRate, setGbpToIdrRate] = useState(0);
  const [jpyToIdrRate, setJpyToIdrRate] = useState(0);
  const [cnyToIdrRate, setCnyToIdrRate] = useState(0);

  useEffect(() => {
    const fetchConversionRates = async () => {
      try {
        const response = await axios.get(
          "https://open.er-api.com/v6/latest/USD"
        );
        const rates = response.data.rates;
        setUsdToIdrRate(rates.IDR);
        setEurToIdrRate(rates.EUR * rates.IDR);
        setGbpToIdrRate(rates.GBP * rates.IDR);
        setJpyToIdrRate(rates.JPY * rates.IDR);
        setCnyToIdrRate(rates.CNY * rates.IDR);
      } catch (error) {
        console.error("Error fetching conversion rates:", error);
      }
    };

    fetchConversionRates();
  }, []);

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
            <p className="text-lg text-stone-300">1 EUR = {eurToIdrRate.toFixed(2)} IDR</p>
            <p className="text-lg text-stone-300">1 GBP = {gbpToIdrRate.toFixed(2)} IDR</p>
            <p className="text-lg text-stone-300">1 JPY = {jpyToIdrRate.toFixed(2)} IDR</p>
            <p className="text-lg text-stone-300">1 CNY = {cnyToIdrRate.toFixed(2)} IDR</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <NavigateBack />
      </div>
    </div>
  );
}
