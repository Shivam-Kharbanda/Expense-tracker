import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');

  const handleAddExpense = () => {
    if (amount && type) {
      onAddExpense({ amount: parseFloat(amount), type });
      setAmount('');
      setType('');
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Add Expenses"
        className="p-2 border rounded w-1/2"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="p-2 border rounded w-1/4"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddExpense} className="bg-black text-white py-2 px-4 rounded">
        Add Expense
      </button>
    </div>
  );
};

export default ExpenseForm;
