import type { Component } from "solid-js";
import { Grid, GridItem } from "@hope-ui/solid";
const Tests: Component = () => {
  return (
    <Grid
      h="700px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap="$1"
    >
      <GridItem
        css={{ border: "1px solid #000" }}
        rowSpan={4}
        colSpan={2}
        bg="accent2"
      >
        Test-1
      </GridItem>
      <GridItem css={{ border: "1px solid #000" }} colSpan={3} bg="beige">
        Test-2
      </GridItem>
      <GridItem css={{ border: "1px solid #000" }} colSpan={3} bg="azure">
        Test-2
      </GridItem>
    </Grid>
  );
};
export default Tests;
