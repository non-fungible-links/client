export interface Token {
  chainId?: string;
  address: string;
  token_id: string;
  points?: string;
  totalSupply?: string;
  balance?: string;
  value?: string;
  linksIn?: Array<{
    id: string;
    weight: number;
    subject: {
      chainId?: string;
      address: string;
      token_id: string;
      tokenId: string;
    };
    target: {
      chainId?: string;
      address: string;
      token_id: string;
      tokenId: string;
    };
  }>;
  linksTo?: Array<{
    id: string;
    weight: number;
    subject: {
      chainId?: string;
      address: string;
      token_id: string;
      tokenId: string;
    };
    target: {
      chainId?: string;
      address: string;
      token_id: string;
      tokenId: string;
    };
  }>;
}

export interface NFTData {
  name: string;
  symbol: string;
  thumbnail?: string;
  image?: string;
}
