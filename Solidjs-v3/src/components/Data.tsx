import type { Component } from "solid-js";
import Button from "@suid/material/Button";

import { SimpleGrid } from "@hope-ui/solid";
import { Box } from "@hope-ui/solid";
const Data: Component = () => {
  return (
    <>
      <div class="row" style="margin-top: 5em; width:70em">
        <SimpleGrid columns={2} gap="$5">
          <Box
            bg="$neutral7"
            rounded="$sm"
            borderWidth="1px"
            borderColor="$neutral6"
            height="8em"
            display="flex"
            alignItems="center"
            boxShadow="$2xl"
            // css={{ backgroundColor: "#000" }}
          ></Box>
          <Box
            bg="$neutral8"
            rounded="$sm"
            borderWidth="1px"
            borderColor="$neutral6"
            height="80px"
            display="flex"
            alignSelf="center"
            boxShadow="$inner"
          ></Box>
          <Box
            bg="$neutral9"
            rounded="$sm"
            borderWidth="1px"
            borderColor="$neutral6"
            height="80px"
            display="flex"
            alignItems="center"
            boxShadow="$lg"
          ></Box>
          <Box
            bg="$neutral10"
            rounded="$sm"
            borderWidth="1px"
            borderColor="$neutral6"
            height="80px"
            display="flex"
            alignItems="center"
            boxShadow="$sm"
          ></Box>
          <Box
            bg="$neutral11"
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
