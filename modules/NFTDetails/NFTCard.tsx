import styled from "styled-components";
import { Panel } from "../../components";

import { Token, NFTData } from "../types";

const NFTImageContainer = styled.div`
  padding: 8px;
  border: 2px solid black;
  margin: 16px;
`;

const NFTImage = styled.img`
  display: block;
`;

const BasicInfoContainer = styled.div`
  padding: 0.75em 1em;
  border-top: 2px solid black;
`;

const Name = styled.h2`
  margin: 0px;
`;

const ExternalRow = styled.div`
  margin-top: 1em;
`;

const ExternalLink = styled.div`
  display: inline-block;
  margin-right: 0.25em;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid black;
`;

const LoadingText = styled.p`
  font-size: 24px;
  padding: 1em;
`;

const CardContent = styled.div``;

interface NFTCardProps {
  token: Token;
  error: any;
  loading: boolean;
  data: NFTData | null;
}

const NFTCard = ({ token, data, loading, error }: NFTCardProps) => {
  if (error) {
    console.log(error);
  }

  return (
    <Panel color="red" spacing={8}>
      {!data ? (
        <LoadingText>Loading ...</LoadingText>
      ) : (
        <CardContent>
          <NFTImageContainer>
            <NFTImage src={data.image} width="100%" />
          </NFTImageContainer>
          <BasicInfoContainer>
            <Name>
              {data.name} #{token.token_id}
            </Name>
            <ExternalRow>
              <ExternalLink>
                <a
                  target="_blank"
                  href={`https://rarible.com/token/${token.address}:${token.token_id}`}
                >
                  <img width="100%" src="/rarible.webp" />
                </a>
              </ExternalLink>
              <ExternalLink>
                <a
                  target="_blank"
                  href={`https://opensea.io/assets/ethereum/${token.address}/${token.token_id}`}
                >
                  <img width="100%" src="/opensea.png" />
                </a>
              </ExternalLink>
            </ExternalRow>
          </BasicInfoContainer>
        </CardContent>
      )}
    </Panel>
  );
};

export default NFTCard;
