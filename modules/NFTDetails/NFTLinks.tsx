import styled from "styled-components";
import { useState } from "react";
import { Tabs } from "../../components";
import LinksList from "./LinksList";

const MarginTop = styled.div`
  margin-top: 2em;
`;

const NFTLinks = () => {
  const [selectedTab, setSelectedTab] = useState("links-in");

  const linksIn = [
    {
      chainId: "0x1",
      address: "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
      token_id: "12",
    },
    {
      chainId: "0x1",
      address: "0xbd3531da5cf5857e7cfaa92426877b022e612cf8",
      token_id: "56",
    },
    {
      chainId: "0x1",
      address: "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
      token_id: "17",
    },
    {
      chainId: "0x1",
      address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      token_id: "854",
    },
    {
      chainId: "0x1",
      address: "0x769272677fab02575e84945f03eca517acc544cc",
      token_id: "243",
    },
    {
      chainId: "0x1",
      address: "0xed5af388653567af2f388e6224dc7c4b3241c544",
      token_id: "1155",
    },
    {
      chainId: "0x1",
      address: "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
      token_id: "9945",
    },
  ];

  const linksOut = [
    {
      chainId: "0x1",
      address: "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
      token_id: "86",
    },
    {
      chainId: "0x1",
      address: "0xbd3531da5cf5857e7cfaa92426877b022e612cf8",
      token_id: "25",
    },
    {
      chainId: "0x1",
      address: "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
      token_id: "32",
    },
    {
      chainId: "0x1",
      address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      token_id: "47",
    },
    {
      chainId: "0x1",
      address: "0x769272677fab02575e84945f03eca517acc544cc",
      token_id: "75",
    },
  ];

  return (
    <div>
      <Tabs
        color="gray"
        selected={selectedTab}
        onChange={(v: string) => setSelectedTab(v)}
        size="large"
        tabs={[
          {
            label: `Links In (${linksIn.length})`,
            value: "links-in",
          },
          {
            label: `Links Out (${linksOut.length})`,
            value: "links-out",
          },
        ]}
      />
      <MarginTop />
      <LinksList tokens={selectedTab === "links-in" ? linksIn : linksOut} />
    </div>
  );
};

export default NFTLinks;
