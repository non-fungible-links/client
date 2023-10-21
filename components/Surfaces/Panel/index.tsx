import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";

interface ContainerProps {
  height: number;
}

const Container = styled.div<ContainerProps>`
  display: inline-block;
  width: 100%;
  height: ${(props) => props.height}px;
`;

interface MainPanelProps {
  spacing: number;
  size: {
    width: number;
    height: number;
  };
}

const MainPanel = styled.div<MainPanelProps>`
  border: ${({ theme }) => theme.border.width} solid
    ${({ theme }) => theme.border.color};
  color: ${({ theme }) => theme.text};
  box-sizing: border-box;
  margin-left: ${({ spacing }) => spacing}px;
  margin-top: ${({ spacing, size }) => -1 * size.height + spacing}px;
  background-color: ${({ theme }) => theme.background};
  width: calc(100% - ${({ spacing }) => spacing}px);
`;

interface ShadowPanelProps {
  size: {
    width: number;
    height: number;
  };
  background: string;
}

const ShadowPanel = styled.div<ShadowPanelProps>`
  border: ${({ theme }) => theme.border.width} solid
    ${({ theme }) => theme.border.color};
  box-sizing: border-box;
  width: ${(props) => props.size.width}px;
  height: ${(props) => props.size.height}px;
  background-color: ${(props) => props.theme[props.background]};
`;

interface PanelProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  spacing?: number;
  color: "gray" | "red" | "purple" | "cyan" | "orange";
  children?: React.ReactNode;
}

const Panel = ({
  onClick = () => {},
  spacing = 10,
  color = "gray",
  children,
}: PanelProps) => {
  const mainPanelRef = useRef<HTMLDivElement>(null);
  const [shadowDimensions, setShadowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (mainPanelRef.current) {
        const { width, height } = mainPanelRef.current.getBoundingClientRect();
        setShadowDimensions({ width, height });
      }
    };

    const observer = new ResizeObserver((entries) => {
      updateDimensions();
    });
    if (mainPanelRef.current) {
      observer.observe(mainPanelRef.current);
    }

    // Initial call to set dimensions
    updateDimensions();

    // Add an event listener for window resize
    window.addEventListener("resize", updateDimensions);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateDimensions);
      if (mainPanelRef.current) {
        observer.unobserve(mainPanelRef.current);
      }
    };
  }, [mainPanelRef.current]);

  return (
    <Container height={shadowDimensions.height + spacing}>
      <ShadowPanel background={color} size={shadowDimensions} />
      <MainPanel
        size={shadowDimensions}
        onClick={onClick}
        spacing={spacing}
        ref={mainPanelRef}
      >
        {children}
      </MainPanel>
    </Container>
  );
};

export default Panel;
