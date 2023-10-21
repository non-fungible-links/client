import { useState, useEffect } from "react";
import Moralis from "moralis";

import { Token, NFTData } from "../types";

function replaceIpfsUrl(inputString: string) {
  // Check if the input string starts with "ipfs://"
  if (inputString.startsWith("ipfs://")) {
    // Replace "ipfs://" with "https://ipfs.io/ipfs/"
    return "https://ipfs.io/ipfs/" + inputString.slice(7);
  } else {
    // Return the input string unchanged
    return inputString;
  }
}

export const useNFT = ({ chainId = "eth", address, token_id }: Token) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | any>();
  const [data, setData] = useState<null | NFTData>(null);

  useEffect(() => {
    const main = async () => {
      try {
        const response = await Moralis.EvmApi.nft.getNFTMetadata({
          chain: chainId,
          format: "decimal",
          normalizeMetadata: true,
          mediaItems: true,
          address: address,
          tokenId: token_id,
        });

        if (response) {
          setData({
            name: response.raw.name,
            symbol: response.raw.symbol,
            thumbnail: response.raw.media?.media_collection?.low.url,
            image: response.raw.media?.media_collection?.high.url,
          });
        }
        setLoading(false);
      } catch (e) {
        console.log(chainId);
        setLoading(false);
        setError(e);
      }
    };

    if (chainId && address && token_id) {
      main();
    }
  }, [chainId, address, token_id]);

  return {
    loading,
    error,
    data,
  };
};
