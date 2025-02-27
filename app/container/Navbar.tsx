"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Expenses",
    href: "/expenses",
  },
];

export default function Navbar() {
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <nav className="fixed top-0 left-0 mx-auto w-full py-4 shadow-md">
      <ul className="flex items-center justify-center space-x-8">
        {Navlinks.map((link) => {
          const isActive =
            currentPath === link.href ||
            (currentPath.startsWith(link.href) && link.href !== "/");
          return (
            <li key={link.href}>
              <Link
                key={link.href}
                href={link.href}
                className={`${isActive ? "text-zinc-800" : "text-zinc-500"}`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
