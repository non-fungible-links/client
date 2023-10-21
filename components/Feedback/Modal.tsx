import styled from "styled-components";
import React from "react";

import { Panel } from "../Surfaces";

const ModalOverlay = styled.div<{ onClick: Function }>`
  width: 100vw;
  height: 100vh;
  //background-color: rgba(101, 7, 183, 0.7);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: "2px solid black";
  z-index: 5000;
`;

const PanelHolder = styled.div`
  width: 600px;
`;

const Content = styled.div``;

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: Function;
}

const Modal = ({ children, isOpen, onClose = () => {} }: ModalProps) => {
  if (!isOpen) {
    return <div></div>;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <PanelHolder>
        <Panel color="gray" onClick={(e) => e.stopPropagation()}>
          <Content>{children}</Content>
        </Panel>
      </PanelHolder>
    </ModalOverlay>
  );
};

export default Modal;
