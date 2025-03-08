import React from "react";
import Navbar from "./Navbar";
import Darkmode from "@/utils/darkmode/Darkmode";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="flex items-center justify-center mt-16">
      <header>
        <Navbar />
        <Darkmode />
      </header>
      <main>{children}</main>
    </div>
  );
}
