import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import SummaryBox from './components/SummaryBox';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const sponsoredMoney = 100; // Example fixed value

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const netBalance = sponsoredMoney - totalExpenses;

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <Header />
      <main className="w-full max-w-4xl flex mt-8 gap-4">
        {/* Expense Form and List */}
        <div className="w-2/3 bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add your Expenses</h2>
          <ExpenseForm onAddExpense={addExpense} />
          <hr className="my-4" />
          <ExpenseList expenses={expenses} />
        </div>

        {/* Summary Boxes */}
        <div className="w-1/3 flex flex-col gap-4">
          <SummaryBox title="Total Expenses" amount={totalExpenses} />
          <SummaryBox title="Sponsored Money" amount={sponsoredMoney} />
          <SummaryBox title="Net Balance" amount={netBalance} />
        </div>
      </main>
    </div>
  );
};

export default App;
