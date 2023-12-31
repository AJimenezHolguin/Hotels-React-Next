import { CurrentPageProvider } from "@/store/CurrentProvider";
import { Menu } from "../../components/molecules/menu/Menu";
import "./globals.css";
import { Inter } from "next/font/google";
import ProviderReservation from "@/store/providerReservation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hotels travelling",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ProviderReservation>
      <CurrentPageProvider>
        <body className={inter.className}>
          <Menu />
          {children}
        </body>
      </CurrentPageProvider>
      </ProviderReservation>
    </html>
  );
}
