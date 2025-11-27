import { useEffect } from "react";
import { Navbar } from "./elements/Navbar";
import { Footer } from "./elements/Footer";
import { useThemeStore } from "../store/ThemeStore";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { theme } = useThemeStore();

  // Ensure theme class is synchronized after mount and on theme changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};