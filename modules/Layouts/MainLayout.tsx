import React from "react";
import Header from "../Header";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../components/theme";
import { useEffect, useState } from "react";
import { startMoralis } from "../hooks/startMoralis";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

interface LayoutProps {
  children: React.ReactNode;
}

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/ajand/nflinks",
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>
      <ThemeProvider theme={lightTheme}>
        <Header />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default MainLayout;
