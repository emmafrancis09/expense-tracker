import React from "react";
import { AddExpense } from "../actions/actions";
import { Button } from "@/components/ui/button";

export default function Expensespage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl mt-8 font-bold">Expenses</h1>
      <form
        action={AddExpense}
        className="flex items-center justify-center flex-col gap-y-4 my-14 border p-8 rounded-lg shadow-lg"
      >
        <input
          title="Expense"
          name="expense"
          type="text"
          placeholder="add expense"
          className="border p-4 rounded-lg border-black w-64"
        />
        <input
          title="amount"
          name="amount"
          type="number"
          placeholder="Expense Amount: $"
          className="border p-4 rounded-lg border-black w-64"
        />
        <textarea
          title="description"
          name="description"
          placeholder="Describe your expense ..."
          className="border border-black w-64 rounded-lg h-56 p-4"
        ></textarea>
        <Button className="cursor-pointer h-10">Add Expense</Button>
      </form>
    </div>
  );
}
