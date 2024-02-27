import type { Component } from "solid-js";
import TextField from "@suid/material/TextField";
import Box from "@suid/material/Box";
import Modal from "@suid/material/Modal";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal, For } from "solid-js";
import Button from "@suid/material/Button";
import Card from "@suid/material/Card";
import CardContent from "@suid/material/CardContent";
import Typography from "@suid/material/Typography";
import IconButton from "@suid/material/IconButton";
import CloseIcon from "@suid/icons-material/Clear";

function Api() {
  const [users, setUsers] = createSignal([]);
  const getUsers = async () => {
    const res = await fetch("http://localhost:4000");
    // console.log(res.json());
    const result = await res.json();
    console.log(result);
    setUsers(result);
  };
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

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
        Choose Books
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
            bgcolor: "#ffffff",
            border: "2px solid #000",
            boxShadow: "24px",
            p: 4,
            height: "100%",
            overflow: "auto",
          }}
        >
          <IconButton
            sx={{ position: "absolute", right: ".1em" }}
            aria-label="close"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          {/* <Button
            sx={{ position: "absolute", right: ".1em" }}
            onClick={handleClose}
          >
            X
          </Button> */}
          <section>
            <h1>Fetched Books</h1>
            <div>
              {/* <TextField
                id="standard-basic"
                label="Search"
                variant="standard"
              /> */}
              <Button variant="contained" onClick={getUsers}>
                GET Books
              </Button>
            </div>
            <br />
            <For each={users()}>
              {(item, i) => (
                <div>
                  <div>
                    <Card sx={{ minWidth: 225, bgcolor: "#edf6ff" }}>
                      <CardContent>
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          component="div"
                        >
                          BookName : {item.bookName} <br />
                          BookAuthor : {item.bookAuthor} <br />
                          BookPages : {item.bookPages}
                          <br /> BookPrice : {item.bookPrice} <br />
                          BookState : {item.bookState}
                        </Typography>
                      </CardContent>
                    </Card>
                    <br />
                  </div>
                </div>
              )}
            </For>
          </section>
        </Box>
      </Modal>
    </>
  );
}
export default Api;
