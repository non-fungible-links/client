import React from "react";
import Header from "../Header";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../components/theme";
import { useEffect, useState } from "react";
import { startMoralis } from "../hooks/startMoralis";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    console.log("hi");
    const main = async () => {
      try {
        await startMoralis();
        setIsReady(true);
      } catch (err) {
        console.log(err);
      }
    };

    main();
  }, []);

  if (!isReady) return <div>Setting up moralis</div>;

  return (
    <ThemeProvider theme={lightTheme}>
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default MainLayout;
