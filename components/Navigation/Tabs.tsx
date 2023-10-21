import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Panel } from "../Surfaces";

const TabsContainer = styled.div`
  display: flex;
  overflow: auto;
  /* Customize the scrollbar */
  &::-webkit-scrollbar {
    width: 10px;
    height: 6px;
  }

  /* Customize the scrollbar track */
  &::-webkit-scrollbar-track {
    border-top: ${({ theme }) => theme.border.width} solid
      ${({ theme }) => theme.border.color};
    background: ${({ theme }) => theme.background};
    border-radius: 3px;
  }

  /* Customize the scrollbar thumb (the draggable part) */
  &::-webkit-scrollbar-thumb {
    border-top: ${({ theme }) => theme.border.width} solid
      ${({ theme }) => theme.border.color};
    border-right: ${({ theme }) => theme.border.width} solid
      ${({ theme }) => theme.border.color};
    border-left: ${({ theme }) => theme.border.width} solid
      ${({ theme }) => theme.border.color};
    background: ${({ theme }) => theme.tabColorPrimary};
  }
`;

interface TabProps {
  padding: string;
  selected: boolean;
}

const Tab = styled.div<TabProps>`
  padding: ${({ padding }) => padding};
  background-color: ${({ selected, theme }) =>
    selected ? theme.tabColorPrimary : "inherit"};
  transition: 200ms ease-in-out;
  cursor: pointer;
  border-right: ${({ theme }) => theme.border.width} solid
    ${({ theme }) => theme.border.color};
  &:hover {
    background: ${({ selected, theme }) =>
      selected ? theme.tabColorPrimary : theme.hoverBackground};
  }
`;

interface TabItem {
  label: string;
  value: string | number;
}

interface TabsProps {
  color?: "gray" | "red" | "purple" | "cyan" | "orange";
  size?: "small" | "medium" | "large";
  tabs: Array<TabItem>;
  selected: string | number;
  onChange: Function;
}

const Tabs = ({
  size = "large",
  color = "gray",
  tabs,
  selected,
  onChange = () => {},
}: TabsProps) => {
  const getSpacing = () => {
    switch (size) {
      case "small":
        return 4;
      case "medium":
        return 6;
      case "large":
        return 8;
    }
  };

  const getPadding = () => {
    switch (size) {
      case "small":
        return `0.5em 1em`;
      case "medium":
        return `0.75em 1.5em`;
      case "large":
        return `1em 2em`;
    }
  };

  return (
    <Panel color={color} spacing={getSpacing()}>
      <TabsContainer>
        {tabs.map((tab) => (
          <Tab
            onClick={() => onChange(tab.value)}
            selected={tab.value === selected}
            padding={getPadding()}
          >
            {tab.label}
          </Tab>
        ))}
      </TabsContainer>
    </Panel>
  );
};

export default Tabs;
