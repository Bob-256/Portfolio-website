import React, { useState } from 'react';

function Tools() {
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(100);
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    if (minValue >= maxValue) {
      alert('Minimum value must be less than the maximum value.');
      return;
    }
    const random = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    setRandomNumber(random);
  };

  return (
    <section id="tools" className="py-10 mt-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Tools</h2>
      <div className="bg-white shadow-md p-5 rounded-md max-w-md mx-auto">
        <h3 className="text-xl font-bold mb-3">Random Number Generator</h3>
        <p className="mb-3">Enter a range and generate a random number within that range.</p>

        {/* Input fields for min and max values */}
        <div className="mb-3">
          <label className="block mb-1 font-semibold">Minimum Value:</label>
          <input
            type="number"
            className="border rounded-md p-2 w-full"
            value={minValue}
            onChange={(e) => setMinValue(Number(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-semibold">Maximum Value:</label>
          <input
            type="number"
            className="border rounded-md p-2 w-full"
            value={maxValue}
            onChange={(e) => setMaxValue(Number(e.target.value))}
          />
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={generateRandomNumber}
        >
          Generate
        </button>

        {randomNumber !== null && (
          <p className="mt-3 text-lg font-semibold">Random Number: {randomNumber}</p>
        )}
      </div>
    </section>
  );
}

export default Tools;
