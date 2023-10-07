import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Panel } from "../Surfaces";

interface ButtonWrapperProps {
  fullWidth: boolean;
}

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  cursor: pointer;
  display: ${({ fullWidth }) => (fullWidth ? "block" : "inline-block")};
`;

interface ButtonContentProps {
  padding: string;
  fullWidth: boolean;
}

const ButtonContent = styled.div<ButtonContentProps>`
  padding: ${({ padding }) => padding};
  transition: 200ms ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
  }
`;

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  color?: "gray" | "red" | "purple" | "cyan" | "orange";
  label: string;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

const Button = ({
  color = "gray",
  onClick = () => {},
  label,
  size = "large",
  fullWidth = false,
}: ButtonProps) => {
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
    <ButtonWrapper fullWidth={fullWidth} onClick={onClick}>
      <Panel spacing={getSpacing()} color={color}>
        <ButtonContent fullWidth={fullWidth} padding={getPadding()}>
          {label}
        </ButtonContent>
      </Panel>
    </ButtonWrapper>
  );
};

export default Button;
