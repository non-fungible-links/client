import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Panel } from "../Surfaces";

interface ButtonWrapperProps {
  $fullWidth: boolean;
}

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: ${({ $fullWidth }) => ($fullWidth ? "block" : "inline-block")};
`;

interface ButtonContentProps {
  padding: string;
  $fullWidth: boolean;
  $noPadding: boolean;
  disabled: boolean;
}

const ButtonContent = styled.div<ButtonContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 200ms ease-in-out;
  padding: ${({ padding, $noPadding }) => ($noPadding ? 0 : padding)};
  ${({ $noPadding }) => ($noPadding ? "height: 56px; font-size: 24px;" : "")}
  background-color: ${({ disabled }) => (disabled ? "#d8d8d8" : null)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background: ${({ theme, disabled }) =>
      disabled ? null : theme.hoverBackground};
  }
`;

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  color?: "gray" | "red" | "purple" | "cyan" | "orange";
  label: string;
  size?: "small" | "medium" | "large";
  $fullWidth?: boolean;
  padding?: "small" | "medium" | "large";
  $noPadding?: boolean;
  disabled?: boolean;
}

const Button = ({
  color = "gray",
  onClick = () => {},
  label,
  size = "large",
  $fullWidth = false,
  padding = "large",
  $noPadding = false,
  disabled = false,
}: ButtonProps) => {
  const getSpacing = () => {
    switch (padding) {
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
    <ButtonWrapper $fullWidth={$fullWidth} onClick={onClick}>
      <Panel spacing={getSpacing()} color={color}>
        <ButtonContent
          $noPadding={$noPadding}
          $fullWidth={$fullWidth}
          padding={getPadding()}
          disabled={disabled}
        >
          {label}
        </ButtonContent>
      </Panel>
    </ButtonWrapper>
  );
};

export default Button;
