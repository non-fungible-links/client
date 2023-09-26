import styled from "styled-components";
import { useState } from "react";
import { Tabs } from "../../components";
import LinksList from "./LinksList";
import { Token } from "../types";

const MarginTop = styled.div`
  margin-top: 2em;
`;

interface LinksProps {
  token: Token;
}

const NFTLinks = ({ token }: LinksProps) => {
  const [selectedTab, setSelectedTab] = useState("links-in");

  console.log(
    token.linksIn?.map((nft) => ({
      ...nft,
      token_id: nft.target.tokenId,
    }))
  );

  return (
    <div>
      <Tabs
        color="gray"
        selected={selectedTab}
        onChange={(v: string) => setSelectedTab(v)}
        size="large"
        tabs={[
          {
            label: `Links In (${
              token && token.linksIn ? token.linksIn.length : 0
            })`,
            value: "links-in",
          },
          {
            label: `Links To (${
              token && token.linksTo ? token.linksTo.length : 0
            })`,
            value: "links-out",
          },
        ]}
      />
      <MarginTop />
      <LinksList
        tokens={
          selectedTab === "links-in"
            ? token.linksIn
              ? // @ts-ignore
                token.linksIn.map((nft) => ({
                  ...nft.target,
                  token_id: nft.subject.tokenId,
                }))
              : []
            : // @ts-ignore
            token.linksTo
            ? token.linksTo.map((nft) => ({
                ...nft.subject,
                token_id: nft.subject.tokenId,
              }))
            : []
        }
      />
    </div>
  );
};

export default NFTLinks;
