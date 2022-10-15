import * as React from "react";
import "./styles/base.scss";

import {
  Box,
  Button,
  SpaceBetween,
  Container,
  Textarea,
} from "@cloudscape-design/components";

import {
  applyMode,
  applyDensity,
  Density,
  Mode,
} from "@cloudscape-design/global-styles";

applyMode(Mode.Dark);
applyDensity(Density.Compact);

const App = () => {
  const [value, setValue] = React.useState("");

  return (
    <Container>
      <SpaceBetween direction="vertical" size="m">
        <Button variant="primary">Primary button</Button>
      </SpaceBetween>
      <Box padding={{ vertical: "m" }}>
        <Textarea
          onChange={({ detail }) => {
            return setValue(detail.value);
          }}
          value={value}
          autoFocus
          placeholder="Enter content here"
        />
        <Box variant="p">
          <strong>{value}</strong>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
