import styled from "styled-components";

import { Panel, Button } from "../../components";

const ActionsContent = styled.div`
  padding: 1em;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const Info = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const NFTActions = () => {
  return (
    <Panel spacing={8} color="purple">
      <ActionsContent>
        <InfoRow>
          <Info>Next Mint Price: 12 Matic</Info>
          <Info>Rank: 102 | Points: 1423</Info>
        </InfoRow>
        <ActionsRow>
          <Button color="cyan" padding="medium" size="small" label="Mint " />
          <Button color="orange" padding="medium" size="small" label="Link" />
        </ActionsRow>
      </ActionsContent>
    </Panel>
  );
};

export default NFTActions;
