import * as React from "react";
import "@cloudscape-design/global-styles/index.css";
import Button from "@cloudscape-design/components/button";
import TextContent from "@cloudscape-design/components/text-content";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Textarea from "@cloudscape-design/components/textarea";
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
    <div>
      <SpaceBetween direction="vertical" size="m">
        <Button>Secondary button</Button>
        <Button variant="primary">Primary button</Button>
      </SpaceBetween>
      <Textarea
        onChange={({ detail }) => {
          return setValue(detail.value);
        }}
        value={value}
        autoFocus
        placeholder="Enter content here"
      />
      <TextContent>
        <strong>{value}</strong>
      </TextContent>
    </div>
  );
};

export default App;
