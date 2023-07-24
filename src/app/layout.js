import "./globals.css";
import { Roboto_Serif } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ThemeProvider } from "../context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
const roboto = Roboto_Serif({ subsets: ["latin"] });

export const metadata = {
  title: "Dev digtal Agency",
  description: "Dev digtal Agency website provide web development services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <div className={roboto.className + +"mainContainer"}>
              <Header />
              {children}
              <Footer />
            </div>
            <div className="backLayer"></div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
