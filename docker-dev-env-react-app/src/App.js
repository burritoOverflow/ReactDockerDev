import * as React from "react";
import Header from "@cloudscape-design/components/header";
import Button from "@cloudscape-design/components/button";
import SpaceBetween from "@cloudscape-design/components/space-between";

export default function App() {
  return (
    <Header
      variant="h1"
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button>Secondary button</Button>
          <Button variant="primary">
            Primary button
          </Button>
        </SpaceBetween>
      }
    >
      Page title
    </Header>
  );
}