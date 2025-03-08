import mongoose, { model, models } from "mongoose";

const ExpenseSchema = new mongoose.Schema(
  {
    name: { type: String },
    amount: { type: Number },
    description: { type: String },
  },
  { timestamps: true }
);

export const Expense = models.Expense || model("Expense", ExpenseSchema);
