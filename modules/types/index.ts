export interface Token {
  chainId?: string;
  address: string;
  token_id: string;
}

export interface NFTData {
  name: string;
  symbol: string;
  thumbnail?: string;
  image?: string;
}
