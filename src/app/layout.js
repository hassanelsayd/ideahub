import { ThemeContextProvider } from "@/context/ThemeContext";
import { Navbar } from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Footer from "./components/Footer/Footer";
import SessionWrapper from "../../authComponents/SessionWrapper";
import { AuthContextProvider } from "@/context/AuthContext";
import { PostsContextProvider } from "@/context/PostsContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ideahub",
  description: "Where the good idea find you!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <SessionWrapper>
              <AuthContextProvider>
                <PostsContextProvider>
                  <div className="container">
                    <div className="wrapper">
                      <Navbar />
                      {children}
                      <Footer />
                    </div>
                  </div>
                </PostsContextProvider>
              </AuthContextProvider>
            </SessionWrapper>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
