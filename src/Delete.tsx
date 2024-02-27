import type { Component } from "solid-js";
import TextField from "@suid/material/TextField";
import Box from "@suid/material/Box";
import Modal from "@suid/material/Modal";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal } from "solid-js";
import Button from "@suid/material/Button";
import IconButton from "@suid/material/IconButton";
import ClearIcon from "@suid/icons-material/Close";

const Delete: Component = () => {
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  const deleteBook = async () => {
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
    const res = await fetch(`http://localhost:4000/delete`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookName: bookNameInput.value,
        bookAuthor: bookAuthorInput.value,
        bookPages: bookPagesInput.value,
        bookPrice: bookPriceInput.value,
      }),
    });
    let data = await res.json();
    console.log("Book Deleted Successfully", data);
  };

  return (
    <>
      <Button
        sx={{
          fontSize: "1.5em",
          fontWeight: "bold",
          borderRadius: "50px",
        }}
        variant="outlined"
        size="large"
        onClick={handleOpen}
      >
        Delete Book
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
            <ClearIcon />
          </IconButton>
          <section>
            <h1>Book to Delete</h1>
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
              <Button variant="contained" onClick={deleteBook}>
                DELETE BOOK
              </Button>
            </div>
          </section>
        </Box>
      </Modal>
    </>
  );
};
export default Delete;
