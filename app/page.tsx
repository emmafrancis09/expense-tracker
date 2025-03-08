"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold py-12">Home</h1>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          📊 Take Control of Your Finances with Ease!
        </h1>
        <h2 className="text-lg text-neutral-600 mb-6">
          Managing your expenses has never been simpler! Our powerful expense
          tracker helps you <strong>track, analyze, and optimize</strong> your
          spending effortlessly.
        </h2>

        <ul className="text-left space-y-4 text-lg text-neutral-700">
          <li>
            💰 <strong>Track Every Expense:</strong> Log your transactions in
            seconds and stay on top of your finances.
          </li>
          <li>
            📈 <strong>Gain Insights:</strong> Visualize your spending patterns
            and make informed financial decisions.
          </li>
          <li>
            🔄 <strong>Stay Organized:</strong> Categorize expenses, set
            budgets, and never overspend again.
          </li>
          <li>
            📅 <strong>Anytime, Anywhere:</strong> Access your expense history
            from any device, anytime.
          </li>
        </ul>

        <p className="mt-6 text-lg font-semibold text-gray-800">
          Start taking charge of your finances today! Your smarter spending
          journey begins here. 🚀
        </p>

        <Button
          onClick={() => router.push("/expenses")}
          className="mt-12 h-12 cursor-pointer"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
