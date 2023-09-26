import styled from "styled-components";
import { useRouter } from "next/router";
import { Button } from "../../components";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const MenuContainer = styled.div`
  display: flex;
`;

const MenuButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 1em;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  transition: 200ms;
  &:hover {
    color: ${({ theme }) => theme.red};
  }
`;

const Margin = styled.div`
  margin-left: 1em;
  margin-top: 0.3em;
`;

const MenuButtonActive = styled(MenuButton)`
  color: ${({ theme }) => theme.red};
  font-weight: 700;
`;

interface HeaderProps {
  connected: boolean;
  onConnect: Function;
}

const Menu = ({ connected, onConnect }: HeaderProps) => {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const menuItems = [
    {
      label: "Leaderboard",
      isActive: router.pathname.includes("leaderboard"),
      action: () => {
        return router.push("/");
      },
    },
    isConnected
      ? {
          label: "Disconnect",
          isActive: router.pathname.includes("profile"),
          action: () => {
            return disconnect();
          },
        }
      : {
          label: "Connect",
          isActive: false,
          normal: true,
          action: () => {
            onConnect();
          },
        },
  ];

  return (
    <MenuContainer>
      {menuItems.map((item) =>
        item.normal ? (
          <Margin key={item.label}>
            <Button
              onClick={() => connect()}
              color="red"
              label="Connect"
              size="small"
              padding="small"
            />
          </Margin>
        ) : item.isActive ? (
          <MenuButtonActive key={item.label} onClick={() => item.action()}>
            {item.label}
          </MenuButtonActive>
        ) : (
          <MenuButton key={item.label} onClick={() => item.action()}>
            {item.label}
          </MenuButton>
        )
      )}
    </MenuContainer>
  );
};

export default Menu;
