import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "$MEOW",
  description: "$MEOW token in Zilliqa",
  icons: {
    icon: "/Freshlycat.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="Rx3onMr-j40kDSZOFQKoq9SNtrHx6vqU1AwLnWoFFHc" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
