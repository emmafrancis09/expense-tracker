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
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 pt-4 mb-14 gap-y-3">
          {expenses.map((expense) => (
            <li
              key={expense._id}
              className="border border-neutral-300 flex flex-col items-center justify-center rounded-lg p-10 cursor-pointer shadow-lg hover:shadow-neutral-500 transition-all"
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
