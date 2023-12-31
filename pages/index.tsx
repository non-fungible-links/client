import type { NextPage } from "next";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";
import MainLayout from "../modules/Layouts/MainLayout";

import { GoTo, Leaderboard } from "../modules";

const ContainerWrapper = styled.div`
  margin-top: 1.8em;
`;

const MarginTop = styled.div`
  margin-top: 2em;
`;

const Home: NextPage = () => {
  return (
    <MainLayout>
      <ContainerWrapper>
        <Container>
          <Row>
            <Col md={12}>
              <GoTo />
            </Col>
          </Row>
          <MarginTop />
          <Row>
            <Col md={12}>
              <Leaderboard />
            </Col>
          </Row>
        </Container>
        <MarginTop />
      </ContainerWrapper>
    </MainLayout>
  );
};

export default Home;
