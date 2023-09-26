import type { NextPage } from "next";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";
import MainLayout from "../../modules/Layouts/MainLayout";
import { NFTCard, NFTActions, NFTLinks, LinkerInfo } from "../../modules";
import { useRouter } from "next/router";
import { useNFT } from "../../modules/hooks/useNFT";
import { useQuery, gql } from "@apollo/client";

const NFTS = gql`
  {
    nfts(first: 1000, orderBy: points, orderDirection: desc) {
      id
      chainId
      address
      tokenId
      totalSupply
      points
      value
      balance
      linksIn {
        id
        subject {
          id
          chainId
          address
          tokenId
          totalSupply
          points
          value
          balance
        }
        target {
          id
          chainId
          address
          tokenId
          totalSupply
          points
          value
          balance
        }
        weight
      }
      linksTo {
        id
        subject {
          id
          chainId
          address
          tokenId
          totalSupply
          points
          value
          balance
        }
        target {
          id
          chainId
          address
          tokenId
          totalSupply
          points
          value
          balance
        }
        weight
      }
    }
  }
`;

const ContainerWrapper = styled.div`
  margin-top: 1.8em;
`;

const MarginTop = styled.div`
  margin-top: 2em;
`;

function parseQuery(input: string) {
  const parts = input.split(":");

  return {
    chainId: parts[0],
    address: parts[1],
    token_id: parts[2],
  };
}

const TokenDetails: NextPage = () => {
  const router = useRouter();
  const query = useQuery(NFTS);

  const parsedQuery = parseQuery(String(router.query.id));

  console.log(query);

  const token = query.data
    ? {
        ...parsedQuery,
        ...query.data.nfts.find(
          (nft: any) => String(nft.tokenId) === parsedQuery.token_id
        ),
      }
    : parsedQuery;

  const { data, error, loading } = useNFT(token);

  return (
    <ContainerWrapper>
      <Container>
        <Row>
          <Col md={4}>
            <NFTCard
              token={token}
              data={data}
              loading={loading}
              error={error}
            />
            <MarginTop />

            <LinkerInfo />
          </Col>
          <Col md={8}>
            <NFTActions token={token} />
            <MarginTop />
            <NFTLinks token={token} />
          </Col>
        </Row>
        <MarginTop />
      </Container>
    </ContainerWrapper>
  );
};

const DetailsPage: NextPage = () => {
  return (
    <MainLayout>
      <TokenDetails />
    </MainLayout>
  );
};

export default DetailsPage;
