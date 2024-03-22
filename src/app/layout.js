import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "./components/transitionProvider.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "João Schier's Portfolio",
  description: "Made with Next.js, TailwindCSS and Framer-Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
