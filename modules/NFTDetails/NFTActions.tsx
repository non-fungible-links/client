import styled from "styled-components";
import { useState, useEffect } from "react";
import { Panel, Button, Modal } from "../../components";
import { Token } from "../types";
import { ethers } from "ethers";

import contracts from "../contract";

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

  const [mintPrice, setMintPrice] = useState(0);

  console.log(token);

  useEffect(() => {
    const main = async () => {
      const RPC =
        "https://eth-goerli.g.alchemy.com/v2/l_THcPj6shiZ-E1LyKHnHeXx75E1iXrT";

      const provider = new ethers.JsonRpcProvider(RPC);

      const nflinks = new ethers.Contract(
        contracts.nflinks.address,
        contracts.nflinks.abi,
        provider
      );

      const target = {
        chainId: token.chainId,
        tokenAddress: token.address,
        tokenId: token.token_id,
      };

      console.log(target);

      try {
        const linkerId = await nflinks.calculateLinkerId(target);

        console.log(linkerId);

        const nftPrice = await nflinks.figureMintPrice.staticCall(linkerId);

        setMintPrice(nftPrice);
      } catch (err) {
        console.error(err);
      }
    };

    if (token) {
      main();
    }
  }, [token]);

  return (
    <>
      <Panel spacing={8} color="purple">
        <ActionsContent>
          <InfoRow>
            <Info>
              Next Mint Price:{" "}
              {Number(ethers.formatEther(mintPrice)).toFixed(4)} Matic
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
        <Minter
          supply={token.totalSupply ? token.totalSupply : String(0)}
          price={mintPrice}
          token={token}
        />
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
