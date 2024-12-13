import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";

export const metadata: Metadata = {
  title: "Financer",
  description: `Financer is an app made to make your money management efficient.
  Generated using Create Next App and deployed to Vercel.
  You will get job advices(where more demand and Money), Expenditure advices, and save to go to trips.
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add the favicon */}
        <link rel="icon" href="/spendings.webp" type="image/webp" />
      </head>
      <body className="bg-black">
        <Navbar>
          <Profile />
          <h1 className="m-3 text-3xl text-white font-semibold">Financer</h1>
          <a
            href="https://aoblox.vercel.app"
            className="m-3 text-2xl text-white bg-emerald-500 p-2 rounded-2xl hover:bg-green-500"
            style={{ transition: "0.7s background-color" }}
          >
            Gaming
          </a>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
