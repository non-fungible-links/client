import type { NextPage } from "next";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";
import MainLayout from "../../modules/Layouts/MainLayout";

const ContainerWrapper = styled.div`
  margin-top: 1.8em;
`;

const MarginTop = styled.div`
  margin-top: 2em;
`;

const TokenDetails: NextPage = () => {
  return (
    <MainLayout>
      <ContainerWrapper>
        <Container>
          <Row>
            <Col md={12}>The most lonliess day of my life</Col>
          </Row>
          <MarginTop />
        </Container>
      </ContainerWrapper>
    </MainLayout>
  );
};

export default TokenDetails;
