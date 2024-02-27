import styles from "./App.module.css";
import Box from "@suid/material/Box";
import { Textarea } from "@hope-ui/solid";
import { Grid, GridItem } from "@hope-ui/solid";
// import { SplitY, SplitX } from "./Resize";

import {
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from "@hope-ui/solid";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@hope-ui/solid";
import type { Component } from "solid-js";

const Treeview: Component = () => {
  return (
    <>
      <Grid
        h="700px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap="$1"
      >
        <GridItem
          css={{ border: "1px solid #000" }}
          rowSpan={4}
          colSpan={1}
          bg="accent2"
        >
          <Box
            sx={{
              width: 300,
              height: 700,
              bgcolor: "#efefef",
              border: 1,
              borderRadius: 1,
            }}
          >
            Treeview
          </Box>
        </GridItem>
        {/* <SplitY>
          <SplitX>
            <div>Y1 X1</div>
            <SplitY>
              <div>Y1 X2 Y1</div>
              <div>Y1 X2 Y2</div>
              <div>Y1 X2 Y3</div>
            </SplitY>
          </SplitX>
          <div>Y2</div>
        </SplitY> */}
        <GridItem css={{ border: "1px solid #000" }} colSpan={1}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "105ch" },
              textAlign: "center",
            }}
            noValidate
            autocomplete="off"
          >
            <Textarea
              placeholder="SELECT * FROM Users"
              variant="filled"
              size="lg"
              css={{ height: 300 }}
            />
          </Box>
        </GridItem>
        <GridItem css={{ border: "1px solid #000" }} colSpan={4} bg="azure">
          <Table>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th numeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td numeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td numeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td numeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th numeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </GridItem>
      </Grid>
    </>
  );
};

export default Treeview;
