import styled from "styled-components";
import { useRouter } from "next/router";
import { Button } from "../../components";

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

  const menuItems = [
    {
      label: "Leaderboard",
      isActive: router.pathname.includes("leaderboard"),
      action: () => {},
    },
    {
      label: "Collection",
      isActive: router.pathname.includes("collections"),
      action: () => {},
    },
    connected
      ? {
          label: "Profile",
          isActive: router.pathname.includes("profile"),
          action: () => {
            return router.push("/profile");
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
          <Margin>
            <Button color="red" label="Connect" size="small" />
          </Margin>
        ) : item.isActive ? (
          <MenuButtonActive onClick={() => item.action()} key={item.label}>
            {item.label}
          </MenuButtonActive>
        ) : (
          <MenuButton onClick={() => item.action()} key={item.label}>
            {item.label}
          </MenuButton>
        )
      )}
    </MenuContainer>
  );
};

export default Menu;
