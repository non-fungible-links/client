import type { NextPage } from "next";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";
import MainLayout from "../modules/Layouts/MainLayout";

import { GoTo } from "../components";

const ContainerWrapper = styled.div`
  margin-top: 1.8em;
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
        </Container>
      </ContainerWrapper>
    </MainLayout>
  );
};

export default Home;
