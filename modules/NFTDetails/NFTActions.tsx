import styled from "styled-components";
import { useState } from "react";
import { Panel, Button, Modal } from "../../components";
import { Token } from "../types";
import { ethers } from "ethers";

import Minter from "./Minter";

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

interface NFTActionsProps {
  token: Token;
}

const NFTActions = ({ token }: NFTActionsProps) => {
  const [mintTokenOpen, setMintTokenOpen] = useState(false);
  const [linkTokenOpen, setLinkTokenOpen] = useState(false);

  return (
    <>
      <Panel spacing={8} color="purple">
        <ActionsContent>
          <InfoRow>
            <Info>
              Next Mint Price:{" "}
              {ethers.formatEther(String(token.value ? token.value : "0"))}{" "}
              Matic
            </Info>
            <Info>
              {" "}
              Points:{" "}
              {parseInt(
                ethers.formatUnits(String(token.points ? token.points : 0), 15)
              )}
            </Info>
          </InfoRow>
          <ActionsRow>
            <Button
              onClick={() => {
                setMintTokenOpen(true);
              }}
              color="cyan"
              padding="medium"
              size="small"
              label="Mint "
            />
            <Button
              onClick={() => {
                setLinkTokenOpen(true);
              }}
              color="orange"
              padding="medium"
              size="small"
              label="Link"
            />
          </ActionsRow>
        </ActionsContent>
      </Panel>
      <Modal
        isOpen={mintTokenOpen}
        onClose={() => {
          setMintTokenOpen(false);
        }}
      >
        <Minter supply={5} price={12.76} token={token} />
      </Modal>
      <Modal
        isOpen={linkTokenOpen}
        onClose={() => {
          setLinkTokenOpen(false);
        }}
      >
        Hello Linker
      </Modal>
    </>
  );
};

export default NFTActions;
