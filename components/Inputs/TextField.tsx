import { useState, useEffect } from "react";
import styled from "styled-components";

import { Panel } from "../../components";

const TextFieldContainer = styled.div`
  position: relative;
  height: 56px;
`;

interface LabelProps {
  $isFocused: boolean;
}

const TextFieldLabel = styled.label<LabelProps>`
  position: absolute;
  border: ${(props) => (props.$isFocused ? "2px solid black" : "0px")};
  background: ${(props) => props.theme.background};
  top: ${(props) => (props.$isFocused ? "-20px" : "8px")};
  left: ${(props) => (props.$isFocused ? "20px" : "10px")};
  font-size: ${(props) => (props.$isFocused ? "1em" : "1.4em")};
  transition: all 0.3s;
  padding: 0.2em 1em;
  border-radius: 100px;
`;

const TextFieldInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 1.4em;
  padding: 0.2em 0.5em;
  outline: none;
  box-sizing: border-box;
  border: none;
`;

interface TextFieldProps {
  color: "gray" | "red" | "purple" | "cyan" | "orange";
  value: string;
  label: string;
  onChange: Function;
}

const TextField = ({
  color = "gray",
  value,
  label,
  onChange,
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (value) {
      setIsFocused(true);
    }
  }, [value]);

  return (
    <Panel spacing={6} color={color}>
      <TextFieldContainer>
        <TextFieldInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type="email"
          onChange={(e) => {
            onChange(e.target.value);
          }}
          value={value}
        />
        <TextFieldLabel
          onClick={() => setIsFocused(true)}
          $isFocused={isFocused || Boolean(value)}
        >
          {label}
        </TextFieldLabel>
      </TextFieldContainer>
    </Panel>
  );
};

export default TextField;
