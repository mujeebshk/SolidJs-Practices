import type { Component } from "solid-js";
import TextField from "@suid/material/TextField";
import Box from "@suid/material/Box";
import Modal from "@suid/material/Modal";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal, mergeProps, createEffect } from "solid-js";
import Button from "@suid/material/Button";
import IconButton from "@suid/material/IconButton";
import CloseIcon from "@suid/icons-material/Cancel";

const AddBook: Component = () => {
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  const addUser = async () => {
    const bookNameInput = document.getElementById(
      "bookName"
    ) as HTMLInputElement;
    const bookAuthorInput = document.getElementById(
      "bookAuthor"
    ) as HTMLInputElement;
    const bookPagesInput = document.getElementById(
      "bookPages"
    ) as HTMLInputElement;
    const bookPriceInput = document.getElementById(
      "bookPrice"
    ) as HTMLInputElement;
    const bookStateInput = document.getElementById(
      "bookState"
    ) as HTMLInputElement;
    const res = await fetch(`http://localhost:4000`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "*/*" },
      body: JSON.stringify({
        bookName: bookNameInput.value,
        bookAuthor: bookAuthorInput.value,
        bookPages: bookPagesInput.value,
        bookPrice: bookPriceInput.value,
      }),
    });
    let data = await res.json();
    console.log("Book Added", data);
  };

  return (
    <>
      <Button
        sx={{
          fontSize: "1.5em",
          fontWeight: "bold",
          borderRadius: "50px",
          // backgroundColor: "#CEDFD9",
          // color: "#000",
        }}
        variant="outlined"
        size="large"
        onClick={handleOpen}
      >
        Add Book
      </Button>
      <Modal
        open={open()}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            bgcolor: theme.palette.background.paper,
            border: "2px solid #000",
            boxShadow: "24px",
            p: 4,
            height: "100%",
            overflow: "auto",
          }}
        >
          {/* <Button
            sx={{ position: "absolute", right: ".1em" }}
            onClick={handleClose}
          >
            X
          </Button> */}
          <IconButton
            sx={{ position: "absolute", right: ".1em" }}
            aria-label="close"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <section>
            <h1>Book To Add</h1>
            {/* <TextField
              id="standard-basic post"
              label="Enter"
              variant="standard"
            /> */}
            <br />
            <input
              type="text"
              id="bookName"
              placeholder="Enter Book Name"
            ></input>
            <input
              type="text"
              id="bookAuthor"
              placeholder="Enter Book Author"
            ></input>
            <input
              type="text"
              id="bookPages"
              placeholder="Enter Book Pages"
            ></input>
            <input
              type="text"
              id="bookPrice"
              placeholder="Enter Book Price"
            ></input>
            <div class="button">
              <Button
                variant="contained"
                onClick={() => {
                  addUser();
                }}
              >
                Add Book
              </Button>
              <br />
            </div>
          </section>
        </Box>
      </Modal>
    </>
  );
};
export default AddBook;
