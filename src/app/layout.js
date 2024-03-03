import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className="container">
        <Navbar />
=======
      <body className="container" >
        <Navbar/>
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a

        {children}

        <Footer />
<<<<<<< HEAD
      </body>
=======

        </body>
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a
    </html>
  );
}
