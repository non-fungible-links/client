import styled from "styled-components";
import { useState } from "react";
import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";

import { Panel } from "../../components/Surfaces";

import { collections, Collection } from "./collections";

const Container = styled.div`
  position: relative;
`;

const PanelContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  max-width: 100%;
`;

const PanelWrapper = styled.div`
  position: relative;
  z-index: 2400;
`;

const OpenMenuButton = styled.div`
  font-size: 26px;
  border-left: ${({ theme }) => theme.border.width} solid
    ${({ theme }) => theme.border.color};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  cursor: pointer;
  transition: 200ms ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
  }
`;

const SelectedContainer = styled.div`
  transition: 200ms ease-in-out;
  align-items: center;
  width: calc(100% - 58px);
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
  }
`;

const NotSelected = styled.p`
  font-size: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

const SelectorListContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

interface SelectorItemContainerProps {
  index: number;
}

const SelectorItemContainer = styled.div<SelectorItemContainerProps>`
  margin-top: -8px;
  position: relative;
  z-index: ${({ index }) => 2000 - index};
`;

const CollectionItem = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
  }
`;

const CollectionImageContainer = styled.div`
  padding: 1px;
  border: ${({ theme }) => theme.border.width} solid
    ${({ theme }) => theme.border.color};
  margin-left: 1em;
  margin-right: 1em;
`;

const CollectionImage = styled.img`
  width: 40px;
  height: 40px;
  display: block;
`;

const CollectionName = styled.p``;

interface CollectionSelectorProps {
  selected: number | null;
  onSelect: Function;
}

const CollectionSelector = ({
  onSelect,
  selected = null,
}: CollectionSelectorProps) => {
  const [isSelecting, setIsSelecting] = useState(false);

  const changeSelectingStatus = () => setIsSelecting(!isSelecting);

  const renderSelectors = () => {
    return (
      <SelectorListContainer>
        {collections.map((collection, index) => (
          <SelectorItemContainer
            onClick={() => {
              onSelect(index);
              setIsSelecting(false);
            }}
            key={collection.address}
            index={index}
          >
            <Panel spacing={6} color="gray">
              <CollectionItem>
                <CollectionImageContainer>
                  <CollectionImage src={collection.image} />
                </CollectionImageContainer>
                <CollectionName>{collection.name}</CollectionName>
              </CollectionItem>
            </Panel>
          </SelectorItemContainer>
        ))}
      </SelectorListContainer>
    );
  };

  return (
    <Container>
      <PanelWrapper onClick={() => changeSelectingStatus()}>
        <Panel spacing={6} color="purple">
          <PanelContent>
            <SelectedContainer>
              {selected === null || collections[selected] === undefined ? (
                <NotSelected>Select Collection</NotSelected>
              ) : (
                <CollectionItem>
                  <CollectionImageContainer>
                    <CollectionImage src={collections[selected].image} />
                  </CollectionImageContainer>
                  <CollectionName>{collections[selected].name}</CollectionName>
                </CollectionItem>
              )}
            </SelectedContainer>
            <OpenMenuButton>
              {isSelecting ? <HiArrowNarrowUp /> : <HiArrowNarrowDown />}
            </OpenMenuButton>
          </PanelContent>
        </Panel>
      </PanelWrapper>

      {isSelecting ? renderSelectors() : null}
    </Container>
  );
};

export default CollectionSelector;
