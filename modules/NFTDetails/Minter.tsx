import { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import styled from "styled-components";
import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";
import { Token } from "../types";
import { ethers } from "ethers";
import contracts from "../contract";

const MintContainer = styled.div`
  padding: 1em;
`;

const MintText = styled.p`
  font-size: 1.1em;
  line-height: 1.7em;
`;

const MintRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MintSelector = styled.div`
  margin-top: 2em;
  display: flex;
  align-items: center;
`;

const ButtonBase = styled.div<{ $disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (!props.$disabled ? "pointer" : "not-allowed")};
  background-color: ${(props) =>
    !props.$disabled ? "rgba(259, 144, 118, 0.7)" : props.theme.gray};
  transition: 200ms;
  &:hover {
    background-color: ${(props) =>
      !props.$disabled ? "rgba(259, 144, 118, 0.9)" : props.theme.gray};
  }
`;

const MintIncrease = styled(ButtonBase)`
  margin-top: 2em;
  width: 40px;
  height: 40px;
  border: 2px solid black;
`;

const MintDecrease = styled(ButtonBase)`
  margin-top: 2em;
  width: 40px;
  height: 40px;
  border: 2px solid black;
  border-left: 0px;
`;

const MintButton = styled(ButtonBase)`
  margin-top: 2em;
  height: 40px;
  border: 2px solid black;
  padding: 0 1em;
  border-left: 0px;
`;

interface MinterProps {
  token: Token;
  price: number;
  supply: string;
}

const Minter = ({ token, price, supply }: MinterProps) => {
  const [mintAmount, setMintAmount] = useState(1);

  const { config } = usePrepareContractWrite({
    address: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
    abi: contracts.nflinks.viteAbi,
    functionName: "registerAndMint",
    args: [[token.chainId, token.address, token.token_id]],
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  //const { data, isError, isLoading } = useContractRead({
  //  address: contracts.nflinks.address,
  //  abi: contracts.nflinks.viteAbi,
  //  functionName: "getHunger",
  //});

  const reduceDisabled = mintAmount < 2;

  const reduce = () => {
    if (mintAmount > 1) setMintAmount((mA) => mA - 1);
  };

  const increase = () => {
    setMintAmount((mA) => mA + 1);
  };

  const calculateTotal = (amount: number) => {
    return amount * 7;
  };

  return (
    <MintContainer>
      <MintText>
        Current mint price for this link token is{" "}
        <b>{Number(ethers.formatEther(price)).toFixed(4)} $GETH</b>. <br />{" "}
        Current supply is <b>{supply}</b>.
        <br />
        When a mint happens price increases by <b>5%</b>. <br />
        If you mint this token the next token price would be{" "}
        <b>
          {/*(price.multiply() * 1.05).toFixed(2)*/}{" "}
          {(Number(ethers.formatEther(price)) * 1.05).toFixed(4)} $GETH
        </b>
        .
        <br />
        You can use your token to link another nft to this one, or sell it in
        future, or even rent it to somebody that needs it.
      </MintText>
      <MintRow>
        <MintSelector>
          <MintIncrease $disabled={true} onClick={increase}>
            <HiArrowNarrowUp />
          </MintIncrease>
          <MintDecrease
            onClick={() => {
              if (!reduceDisabled) {
                reduce();
              }
            }}
            $disabled={true}
          >
            <HiArrowNarrowDown />
          </MintDecrease>
          <MintButton
            onClick={() => {
              console.log("hi", write?.());
              write?.();
            }}
          >
            Mint&nbsp;<b>{mintAmount} Link</b>&nbsp;For{" "}
            <b>&nbsp;{price} $GETH</b>.
          </MintButton>
        </MintSelector>
      </MintRow>
    </MintContainer>
  );
};

export default Minter;
