import { Panel } from "../../components";
import { Token } from "../types";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useNFT } from "../hooks/useNFT";

const PanelWrapper = styled.div<{ $index: number }>`
  margin-top: -12px;
  position: relative;
  z-index: ${({ $index }) => 1000 - $index};
`;

const ItemContent = styled.div`
  height: 112px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
  }
`;

const ItemLoading = styled.div`
  font-size: 24px;
  margin-left: 1em;
`;

const TokenImageContainer = styled.div`
  padding: 2px;
  border: ${({ theme }) => theme.border.width} solid
    ${({ theme }) => theme.border.color};
  margin-left: 1em;
  margin-right: 1em;
`;

const TokenImage = styled.img`
  width: 80px;
  height: 80px;
  display: block;
`;

const TokenDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TokenInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 200px;
`;

const TokenIdAndSymbol = styled.h6`
  font-size: 16px;
  margin: 0px;
`;

const CollectionName = styled.p`
  margin-bottom: 1em;
`;

const TokenRankContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 200px;
`;

const TokenRank = styled.h6`
  font-size: 16px;
  margin: 0px;
`;

const TokenPoints = styled.p`
  margin-top: 1em;
`;

const TokenLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 200px;
`;

const LinksIn = styled.p``;

const LinksOut = styled.p`
  margin-top: 1em;
`;

const LeaderboardItem = ({ token, index }: { token: Token; index: number }) => {
  const { data, loading, error } = useNFT(token);

  const router = useRouter();

  return (
    <PanelWrapper $index={index}>
      <Panel color="gray">
        <ItemContent
          onClick={() => {
            router.push(
              `/token/${token.chainId}:${token.address}:${token.token_id}`
            );
          }}
        >
          {loading || error ? (
            <ItemLoading>Loading ...</ItemLoading>
          ) : (
            <TokenDataContainer>
              <TokenImageContainer>
                <TokenImage src={data?.thumbnail} />
              </TokenImageContainer>
              <TokenInfoContainer>
                <CollectionName>{data?.name}</CollectionName>
                <TokenIdAndSymbol>
                  {data?.symbol} | {token.token_id}
                </TokenIdAndSymbol>
              </TokenInfoContainer>
              <TokenRankContainer>
                <TokenRank>Rank: {index + 1}</TokenRank>
                <TokenPoints>Points: 48200</TokenPoints>
              </TokenRankContainer>
              <TokenLinksContainer>
                <LinksIn>Links In: 45</LinksIn>
                <LinksOut>Links Out: 41</LinksOut>
              </TokenLinksContainer>
            </TokenDataContainer>
          )}
        </ItemContent>
      </Panel>
    </PanelWrapper>
  );
};

const Leaderboard = () => {
  const tokens = [
    {
      chainId: "0x1",
      address: "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
      token_id: "1",
    },
    {
      chainId: "0x1",
      address: "0xbd3531da5cf5857e7cfaa92426877b022e612cf8",
      token_id: "153",
    },
    {
      chainId: "0x1",
      address: "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
      token_id: "13",
    },
    {
      chainId: "0x1",
      address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      token_id: "12",
    },
    {
      chainId: "0x1",
      address: "0x769272677fab02575e84945f03eca517acc544cc",
      token_id: "19",
    },
    {
      chainId: "0x1",
      address: "0xed5af388653567af2f388e6224dc7c4b3241c544",
      token_id: "15",
    },
    {
      chainId: "0x1",
      address: "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
      token_id: "25",
    },
  ];

  return (
    <div>
      {tokens.map((token, index) => (
        <LeaderboardItem
          index={index}
          key={`${token.chainId}:${token.address}:${token.token_id}`}
          token={token}
        />
      ))}
    </div>
  );
};

export default Leaderboard;
