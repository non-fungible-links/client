import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";

interface ContainerProps {
  height: number;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height}px;
`;

interface MainPanelProps {
  spacing: number;
}

const MainPanel = styled.div<MainPanelProps>`
  border: 2px solid black;
  box-sizing: border-box;
  position: absolute;
  margin-left: ${({ spacing }) => spacing}px;
  margin-top: ${({ spacing }) => spacing}px;
  background-color: white;
  width: 100%;
`;

interface ShadowPanelProps {
  size: {
    width: number;
    height: number;
  };
  background: string;
}

const ShadowPanel = styled.div<ShadowPanelProps>`
  border: 2px solid black;
  position: absolute;
  box-sizing: border-box;
  width: ${(props) => props.size.width}px;
  height: ${(props) => props.size.height}px;
  background-color: ${(props) => props.theme[props.background]};
`;

interface PanelProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  spacing?: number;
  color: "gray" | "red" | "purple" | "cyan" | "orange";
  children?: JSX.Element;
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
      <MainPanel onClick={onClick} spacing={spacing} ref={mainPanelRef}>
        <div>This is a high panel{children}</div>
      </MainPanel>
    </Container>
  );
};

export default Panel;
