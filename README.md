NFLinks is friend.tech but for nfts.

Wait. Wt..?

friendtech is a tool to create and evaluate meaningful links between digital identities.

Digital Identities are basically a subset of NFTs. They are nonfungible assets that represent identities. But the reason that friend tech works is not digital identities, at least not exactly.

It works because of 2 reasons:

1. It links "non-fungible" identities
   Being nonfungible means the identity ( asset ) itself is worth as much as the owner believes it is worth.
2. Links provide meaningful utility
   Having a utility for linking to an identity ( asset ) means those can have value. When it has value then people don't buy it just for the utility then, it can be used as a tool to speculate on the future worth of utility.

So now NFTs are all nonfungible by design, so if we just provide a meaningful

But what utility can we provide for them?

You know, actually the web was cool not because it had webpages, but because it had a link that can help you navigate it and discover more webpages. Now we don't know exactly what metaverse is going to be, but we know one thing. That NFTs for metaverse are going to be what webpages were for the web.

Those links help us to discover new webpages and give us abilities to rank them. Now the utility of NFLinks for the nfts is the same. We provide a leaderboard based on the links to rank NFTs, and help the NFTs to get discovered.

In the smart-contract side the main contract is an ERC-1155 contract which hold 3 types of different tokens, linker tokens, link tokens and referral tokens. Each NFTs (ERC721) get identified by three parameters, chainId, tokenAddress, and tokenId.

Users can mint Linker tokens, and use them to Link another NFT to the target one. When users link two nfts, they will lose their linker token and receive a link token, untill they delink it.

Using UMA it is chain agnostic, and you can link any nft from any evm chain to any nft on another chain. UMA help us to identify the owner the token so they can receieve their share of the link mints.

For data retrieval we use a custom subgraph and moralis API. It's nothing fancy but works for an MVP.

In the frontend we use apollo-client to query subgraph, moralis APi, and a fully custom UI components. Building the UI components was pretty time consuming since I did even custom select component and custom text-field. Even the basic containers of each component (Panel) was a hell of a complex component.
