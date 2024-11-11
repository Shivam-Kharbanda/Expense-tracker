import React from 'react';

const SummaryBox = ({ title, amount }) => (
  <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-xl font-bold">${amount.toFixed(2)}</p>
  </div>
);

export default SummaryBox;
