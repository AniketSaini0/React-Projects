import { useState } from "react";
import { Inputbox } from "./components/index.js";

import "./App.css";
import useCurrencyinfo from "./hooks/useCurrencyinfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] =
    useState(0);

  // A hook always returns a value and sets it into a variable same as below
  // useCurrencyinfo is a custom hook that returns currencyInfo.
  const currencyInfo = useCurrencyinfo(from);
  // this currencyInfo is an **object** that contains all the currency rates.
  // we will use this options variable to populate our select dropdowns.
  const options = Object.keys(currencyInfo); // ways to extract all the keys from an object.

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  const convert = (e) => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap 
    justify-center items-center bg-cover bg-no-repeat opacity-70
    "
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border-2 border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30  ">
          <h1 className="text-orange-500 text-2xl text-center p-3">
            Currency Converter
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Inputbox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={() => {}}
                className="mb-2"
              />
              <Inputbox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={() => {}}
                className="mb-2"
              />
            </div>
            <button
              onClick={(e) => {
                convert(e);
              }}
              className="bg-blue-600 w-full rounded-lg py-3 text-lg"
            >
              Convert
            </button>
            <button className="fixed align-middle top-80 bg-blue-600 rounded-lg py-2 px-3 text-lg">
              swap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
