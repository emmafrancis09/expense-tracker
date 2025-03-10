import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Container from "./container/Container";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expense-tracker",
  description: "This app is for tracking expenses and manage finances well",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Analytics />
          <SpeedInsights />

          <Container>
            <header className="fixed top-0 right-0 z-50 p-4">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>

            {children}
          </Container>
        </body>
      </html>
    </ClerkProvider>
  );
}
