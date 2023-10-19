import React from "react";
import Header from "../Header";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../components/theme";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Header />
    </ThemeProvider>
  );
};

export default MainLayout;
