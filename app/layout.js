import TanstackQueryProvider from "@/components/partials/providers/TanstackQueryProvider";
import "./globals.css";
import { yekan } from "@/core/utils/fonts";
import Header from "@/components/templates/header";
import Footer from "@/components/templates/footer";
import { Toaster } from "react-hot-toast";




export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${yekan.className}`}
      >
        <TanstackQueryProvider>
          <Header />
          <main className="min-h-svh"> {children} </main>
          <Footer />
        </TanstackQueryProvider>
        <Toaster/>
      </body>

    </html>
  );
}
