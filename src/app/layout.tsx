import { Roboto } from "next/font/google";

import { Layout } from "@/components/Layout/Layout";
import { StoreProvider } from "@/redux/StoreProvider";

import "./globals.css";

const inter = Roboto({ weight: ["400"], subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Билетопоиск",
  description: "Крупнейший сервис о кино в рунете.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Layout>{children}</Layout>
        </StoreProvider>
      </body>
    </html>
  );
}
