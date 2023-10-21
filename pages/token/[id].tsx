import type { NextPage } from "next";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";
import MainLayout from "../../modules/Layouts/MainLayout";
import { NFTCard, NFTActions, NFTLinks, LinkerInfo } from "../../modules";
import { useRouter } from "next/router";
import { useNFT } from "../../modules/hooks/useNFT";

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
  const token = parseQuery(String(router.query.id));

  const { data, error, loading } = useNFT(token);

  return (
    <MainLayout>
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
              <NFTActions />
              <MarginTop />
              <NFTLinks />
            </Col>
          </Row>
          <MarginTop />
        </Container>
      </ContainerWrapper>
    </MainLayout>
  );
};

export default TokenDetails;
