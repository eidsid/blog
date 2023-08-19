import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ThemeProvider from "@/context/ThemeContext";
import "./styles/globals.scss";
import AuthProvider from "./components/AuthProvider/AuthProvider";
export const metadata = {
  title: "Dev digtal Agency",
  description: "Dev digtal Agency website provide web development services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
