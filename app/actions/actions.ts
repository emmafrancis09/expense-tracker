"use server";
import { connectDB } from "@/db/mongodb";
import { Expense } from "@/models/Expense";
import { revalidatePath } from "next/cache";

export async function AddExpense(formData: FormData) {
  await connectDB();
  const name = formData.get("expense") as string;
  const amount = parseFloat(formData.get("amount") as string);
  const description = formData.get("description") as string | undefined;
  if (!name || isNaN(amount)) {
    return { success: false, error: "invalid name or expense" };
  }
  try {
    const newExpense = new Expense({ name, amount, description });
    await newExpense.save();

    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
