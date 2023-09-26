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
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";

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

  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  useEffect(() => {
    if (isConnected && switchNetwork) {
      switchNetwork(5);
    }
  }, [chain, isConnected]);

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
