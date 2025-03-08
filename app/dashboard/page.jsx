import connectDB from "@/db/mongodb";
import { Expense } from "@/models/Expense";
import React from "react";

export default async function Dashboardpage() {
  await connectDB();
  const expenses = await Expense.find().lean();

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
      {expenses.length > 0 ? (
        <ul className="grid grid-cols-3 gap-4 pt-4 mb-14">
          {expenses.map((expense) => (
            <li
              key={expense._id}
              className="border border-neutral-300 flex flex-col items-center justify-center rounded-lg p-10 cursor-pointer shadow-lg"
            >
              <p className="font-semibold">{expense.name}</p>
              <p className="text-gray-600">${expense.amount}</p>
              <p className="text-sm text-gray-500">
                {expense.description || "No description"}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 text-gray-500">No expenses recorded yet.</p>
      )}
    </div>
  );
}
