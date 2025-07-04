// app/layout.tsx or layout.js
import { Inter } from 'next/font/google'; // Replace this with your font
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from "@/components/Footer/Footer"
import Aos from '@/components/AOS/Aos';

// Load the font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Prevent horizontal overflow on mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        style={{ overflowX: "hidden" }} // Prevent horizontal scroll
      >

        <Aos />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
