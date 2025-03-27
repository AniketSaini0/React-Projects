import React from "react";

function inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  return (
    <div
      className={`bg-white p-3 text-sm flex rounded-lg ${className}`}
    >
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          className="w-full outline-none p-1.5 bg-transparent"
          value={amount}
          placeholder="Amount"
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange &&
            Number(onAmountChange(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 inline-block">
          Currency Type
        </p>
        inp
        <select
          className="rounded-lg px-1 py-1 outline-none bg-gray-100 cursor-pointer"
          value={selectedCurrency}
          disabled={currencyDisabled}
          onChange={(e) =>
            onCurrencyChange &&
            onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
            >
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default inputbox;
