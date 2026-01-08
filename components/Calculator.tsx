
import React, { useState, useCallback, useEffect } from 'react';
import { CalculatorMode } from '../types';
import QuickButtons from './QuickButtons';

const Calculator: React.FC = () => {
  const [mode, setMode] = useState<CalculatorMode>(CalculatorMode.PRICE_TO_WEIGHT);
  const [pricePerKg, setPricePerKg] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleModeToggle = (newMode: CalculatorMode) => {
    if (newMode !== mode) {
      setMode(newMode);
      setInputValue('');
      setResult(null);
    }
  };

  const handleClear = () => {
    setPricePerKg('');
    setInputValue('');
    setResult(null);
  };

  const calculate = () => {
    const price = parseFloat(pricePerKg);
    const value = parseFloat(inputValue);

    if (isNaN(price) || isNaN(value) || price <= 0) return;

    if (mode === CalculatorMode.PRICE_TO_WEIGHT) {
      // Formula: (amount * 1000) / price_per_kg
      const grams = (value * 1000) / price;
      setResult(grams);
    } else {
      // Formula: (weight * price_per_kg) / 1000
      const cost = (value * price) / 1000;
      setResult(cost);
    }
  };

  const isCalculateDisabled = !pricePerKg || !inputValue || parseFloat(pricePerKg) <= 0 || parseFloat(inputValue) <= 0;

  return (
    <div className="space-y-6">
      {/* 1. Price per kg Input */}
      <section className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <label className="block text-gray-700 font-bold mb-2 text-lg">
          Price per kg (₹/কिलो)
        </label>
        <input
          type="number"
          placeholder="Enter price per kg"
          className="w-full text-2xl p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 transition-colors mb-4"
          value={pricePerKg}
          onChange={(e) => setPricePerKg(e.target.value)}
        />
        <QuickButtons 
          options={['40', '50', '75', '100']} 
          selectedValue={pricePerKg} 
          onSelect={setPricePerKg} 
          prefix="₹"
        />
      </section>

      {/* 2. Mode Toggle */}
      <section className="flex bg-gray-100 p-1 rounded-xl shadow-inner">
        <button
          onClick={() => handleModeToggle(CalculatorMode.PRICE_TO_WEIGHT)}
          className={`flex-1 py-3 text-lg font-bold rounded-lg transition-all ${
            mode === CalculatorMode.PRICE_TO_WEIGHT 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'text-gray-500'
          }`}
        >
          ₹ → g
        </button>
        <button
          onClick={() => handleModeToggle(CalculatorMode.WEIGHT_TO_PRICE)}
          className={`flex-1 py-3 text-lg font-bold rounded-lg transition-all ${
            mode === CalculatorMode.WEIGHT_TO_PRICE 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'text-gray-500'
          }`}
        >
          g → ₹
        </button>
      </section>

      {/* 3 & 4. Variable Mode Mode */}
      <section className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <label className="block text-gray-700 font-bold mb-2 text-lg">
          {mode === CalculatorMode.PRICE_TO_WEIGHT 
            ? 'Customer Amount (₹)' 
            : 'Weight (grams)'}
        </label>
        <input
          type="number"
          placeholder={mode === CalculatorMode.PRICE_TO_WEIGHT ? "Enter ₹ amount" : "Enter grams"}
          className="w-full text-2xl p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 transition-colors mb-4"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setResult(null); // Clear result on typing
          }}
        />
        <QuickButtons 
          options={mode === CalculatorMode.PRICE_TO_WEIGHT 
            ? ['10', '20', '50', '100'] 
            : ['50', '100', '250', '500']} 
          selectedValue={inputValue} 
          onSelect={setInputValue} 
          prefix={mode === CalculatorMode.PRICE_TO_WEIGHT ? '₹' : ''}
          suffix={mode === CalculatorMode.WEIGHT_TO_PRICE ? 'g' : ''}
        />
      </section>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={handleClear}
          className="py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-bold text-xl active:bg-gray-100 transition-colors"
        >
          Clear
        </button>
        <button
          onClick={calculate}
          disabled={isCalculateDisabled}
          className={`py-4 rounded-xl font-bold text-xl shadow-lg transition-all ${
            isCalculateDisabled 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 text-white active:transform active:scale-95'
          }`}
        >
          Calculate
        </button>
      </div>

      {/* Output / Result Box */}
      {result !== null && (
        <div className="mt-6 p-6 border-4 border-green-500 bg-green-50 rounded-2xl text-center shadow-md animate-pulse-once">
          <p className="text-gray-600 font-bold text-lg mb-1">
            {mode === CalculatorMode.PRICE_TO_WEIGHT ? 'Resulting Weight:' : 'Total Amount:'}
          </p>
          <p className="text-4xl font-extrabold text-green-700">
            {mode === CalculatorMode.PRICE_TO_WEIGHT 
              ? `${result.toFixed(2)} grams` 
              : `₹ ${result.toFixed(2)}`}
          </p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
