import { useState } from "react";

import styled from "styled-components";

import { Panel } from "../../components";

const Content = styled.div`
  padding: 1em;
`;

const List = styled.ul`
  margin: 2px;
  padding: 0.5em 1em;
  line-height: 1.7em;
`;

const ActionRow = styled.div`
  margin-top: 1.5em;
`;

const ButtonsRow = styled.div`
  margin-bottom: 0em;
  margin-top: 1em;
  display: flex;
  flex-direction: row-reverse;
`;

const MarginLeft = styled.div`
  margin-left: 1em;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

const LinkerInfo = () => {
  return (
    <Panel color="cyan" spacing={8}>
      <Content>
        <p>
          Here you can get <b>Linker Token</b>
        </p>
        <List>
          <li>
            Linker Tokens are semi fungible tokens that are bound to each NFT.
          </li>
          <li>
            Each time one get minted, <b>the price goes up 5%</b>
          </li>
          <li>
            If they get used to link another NFT,{" "}
            <b>that nft get’s into the links-in list of this token</b>
          </li>
          <li>
            After a succcessful mint you will also get a referral token to
            invite another user to the platfrom.
          </li>
          <li>
            You can also use linker token, or sell it in the secondary market or
            even rent it when the feature gets developed.
          </li>
        </List>
      </Content>
    </Panel>
  );
};

export default LinkerInfo;
