import type { Component } from "solid-js";
import Box from "@suid/material/Box";
import Container from "@suid/material/Container";
import CssBaseline from "@suid/material/CssBaseline";
import Button from "@suid/material/Button";
import Stack from "@suid/material/Stack";
import GetBooks from "./GetBooks";
import AddBook from "./AddBook";
import Delete from "./Delete";
import { createSignal } from "solid-js";
const Library: Component = () => {
  let [id, setId] = createSignal("l7nmd2ep1j");
  let getUrl = () => {
    const urlInput = document.getElementById("id") as HTMLInputElement;
    setId(urlInput.value);
  };
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: "100px" }}>
          <Stack spacing={4} direction="column">
            {/* <Button
              sx={{
                fontSize: "1.5em",
                fontWeight: "bold",
              }}
              variant="outlined"
              size="large"
            >
              Choose Books
            </Button> */}
            <GetBooks />
            {/* <Button
              sx={{ fontSize: "1.5em", fontWeight: "bold" }}
              variant="outlined"
              size="large"
            >
              Add Book
            </Button> */}
            <AddBook />
            {/* <Button
              sx={{ fontSize: "1.5em", fontWeight: "bold" }}
              variant="outlined"
              size="large"
            >
              Delete Book
            </Button> */}
            <Delete />
          </Stack>
        </Box>
      </Container>
    </>
  );
};
export default Library;
