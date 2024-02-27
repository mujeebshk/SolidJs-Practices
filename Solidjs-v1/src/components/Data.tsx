import type { Component } from "solid-js";
import Button from "@suid/material/Button";
import styles from "./App.module.css";

import { SimpleGrid } from "@hope-ui/solid";
import { Box } from "@hope-ui/solid";
const Data: Component = () => {
  return (
    <>
      <Button sx={{ position: "absolute", right: 0 }} variant="outlined">
        {" "}
        + Add File
      </Button>
      <div class={styles.marginTop}>
        <SimpleGrid columns={2} gap="$10">
          <Box
            bg="$accent1"
            rounded="$sm"
            borderWidth="1px"
            borderColor="$neutral6"
            height="80px"
            display="flex"
            alignItems="center"
            // css={{ backgroundColor: "#000" }}
          >
            Sample test.csv
          </Box>
          <Box
            bg="$accent2"
            rounded="$sm"
            borderWidth="1px"
            borderColor="$neutral6"
            height="80px"
            display="flex"
            alignItems="center"
          ></Box>
          <Box
            bg="$accent3"
            rounded="$sm"
            borderWidth="1px"
            borderColor="$neutral6"
            height="80px"
            display="flex"
            alignItems="center"
          ></Box>
          <Box
            bg="$accent4"
            rounded="$sm"
            borderWidth="1px"
            borderColor="$neutral6"
            height="80px"
            display="flex"
            alignItems="center"
          ></Box>
          <Box
            bg="$accent5"
            rounded="$sm"
            borderWidth="1px"
            borderColor="$neutral6"
            height="80px"
            display="flex"
            alignItems="center"
          ></Box>
        </SimpleGrid>
      </div>
    </>
  );
};
export default Data;
