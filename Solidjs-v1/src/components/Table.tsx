import type { Component } from "solid-js";
import Button from "@suid/material/Button";
import styles from "./App.module.css";

import { SimpleGrid } from "@hope-ui/solid";
import { Box } from "@hope-ui/solid";
const Data: Component = () => {
  return (
    <>
      <div class={styles.marginTop}>
        <SimpleGrid columns={2} gap="$5">
          <Box
            bg="$success6"
            rounded="$sm"
            borderWidth="1px"
            borderColor="$neutral6"
            height="80px"
            display="flex"
            alignItems="center"
            boxShadow="$2xl"
            // css={{ backgroundColor: "#000" }}
          ></Box>
          <Box
            bg="$success7"
            rounded="$sm"
            borderWidth="1px"
            borderColor="$neutral6"
            height="80px"
            display="flex"
            alignItems="center"
            boxShadow="$inner"
          ></Box>
          <Box
            bg="$success3"
            rounded="$sm"
            borderWidth="1px"
            borderColor="$neutral6"
            height="80px"
            display="flex"
            alignItems="center"
            boxShadow="$lg"
          ></Box>
          <Box
            bg="$success4"
            rounded="$sm"
            borderWidth="1px"
            borderColor="$neutral6"
            height="80px"
            display="flex"
            alignItems="center"
            boxShadow="$sm"
          ></Box>
          <Box
            bg="$success5"
            rounded="$sm"
            borderWidth="1px"
            borderColor="$neutral6"
            height="80px"
            display="flex"
            alignItems="center"
            boxShadow="$xl"
          ></Box>
        </SimpleGrid>
      </div>
    </>
  );
};
export default Data;
