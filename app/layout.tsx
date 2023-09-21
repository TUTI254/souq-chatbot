import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Chat from "@/components/Chat";
import Providers from "@/lib/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOUQ株式会社",
  description:
    "your ai assistant for all things Tourism in Japan powered by SOUQ株式会社",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 ${inter.className}`}
        >
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  );
}
