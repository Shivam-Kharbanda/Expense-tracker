import React from 'react';

const ExpenseList = ({ expenses }) => (
  <div className="h-40 overflow-y-auto bg-gray-200 p-4 rounded-lg">
    {expenses.map((expense, index) => (
      <div key={index} className="flex justify-between p-2 border-b">
        <span>{expense.type}</span>
        <span>${expense.amount.toFixed(2)}</span>
      </div>
    ))}
  </div>
);

export default ExpenseList;
