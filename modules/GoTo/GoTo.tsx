import styled from "styled-components";
import { useState } from "react";

import { Panel } from "../../components/Surfaces";
import { Row, Col } from "react-grid-system";

import CollectionSelector from "./CollectionSelector";
import { TextField, Button } from "../../components/Inputs";

const Wrapper = styled.div`
  padding: 1em;
`;

const GoTo = () => {
  const [selectedCollection, setSelectedCollection] = useState<number | null>(
    null
  );

  const [tokenId, setTokenId] = useState<string>("");

  return (
    <Panel color="gray">
      <Wrapper>
        <Row>
          <Col md={6}>
            <CollectionSelector
              selected={selectedCollection}
              onSelect={(i: number) => setSelectedCollection(i)}
            />
          </Col>
          <Col md={4}>
            <TextField
              color="purple"
              label="Token ID"
              value={tokenId}
              onChange={(value: string) => {
                if (!isNaN(Number(value))) {
                  setTokenId(
                    String(!isNaN(parseInt(value)) ? parseInt(value) : "")
                  );
                } else {
                  setTokenId("");
                }
              }}
            />
          </Col>
          <Col md={2}>
            <Button
              padding="medium"
              label="Go"
              onClick={() => {}}
              $fullWidth
              color="purple"
              $noPadding={true}
              disabled={!tokenId || selectedCollection === null}
            />
          </Col>
        </Row>
      </Wrapper>
    </Panel>
  );
};

export default GoTo;
