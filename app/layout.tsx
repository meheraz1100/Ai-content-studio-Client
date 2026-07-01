import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  <Navbar />
  {children}
  <Footer />
  <Toaster position="top-right" />
</body>
    </html>
  );
}