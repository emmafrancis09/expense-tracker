import React from "react";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
}
