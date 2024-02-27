// import { Component, Show } from "solid-js";
// import { createSignal, For } from "solid-js";
// import styles from "./App.module.css";
// import logo from "./logo.svg";
// import "./index.css";

// import Button from "@suid/material/Button";
// import Box from "@suid/material/Box";
// import Modal from "@suid/material/Modal";
// import useTheme from "@suid/material/styles/useTheme";
// import Typography from "@suid/material/Typography";

// const [open, setOpen] = createSignal(false);
// const handleOpen = () => setOpen(true);
// const handleClose = () => setOpen(false);
// const theme = useTheme();

// const App: Component = () => {
//   let [books, setbooks] = createSignal(false);
//   const getBooks = async () => {
//     const response = await fetch("http://localhost:4000/books");
//     const result = await response.json();
//     setbooks(result);
//   };
//   const postBook = async () => {
//     const data = document.getElementById("getdata").value;
//     await fetch("http://localhost:5000/book", {
//       method: "POST",
//       headers: { contentType: "application/json" },
//       body: JSON.stringify({ Name: "data" }),
//     });
//   };
//   const toggle = () => setbooks(!books());
//   return (
//     <>
//       <div class={styles.App}>
//         <header class={styles.header}>
//           <img src={logo} class={styles.logo} alt="logo" />
//           {/* <h1>Abdul Mujeeb</h1> */}
//           <div class="wrapper">
//             <div class="static-txt">I'm</div>
//             <ul class="dynamic-txts">
//               <li>
//                 <span>Mujeeb</span>
//               </li>
//               <li>
//                 <span>a Designer</span>
//               </li>
//               <li>
//                 <span>a Developer</span>
//               </li>
//               <li>
//                 <span>a Learner</span>
//               </li>
//             </ul>
//           </div>
//           <Show
//             when={books()}
//             fallback={
//               <Button variant="contained" onClick={handleOpen}>
//                 {" "}
//                 Open Book
//               </Button>
//             }
//           >
//             <Button variant="contained" onClick={toggle}>
//               Back
//             </Button>
//           </Show>
//           <Modal
//             open={open()}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 width: 400,
//                 bgcolor: theme.palette.background.paper,
//                 border: "2px solid #000",
//                 boxShadow: "24px",
//                 p: 4,
//               }}
//             >
//               {/* <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography> */}
//               <Show
//                 when={books()}
//                 fallback={
//                   <Button variant="contained" onClick={getBooks}>
//                     {" "}
//                     Get Book
//                   </Button>
//                 }
//               >
//                 <Button variant="contained" onClick={toggle}>
//                   Back
//                 </Button>
//               </Show>
//               <For each={books().allBooks}>{(item) => <div>{item}</div>}</For>
//               {/* <input id="getdata" type="text">
//                 Enter data
//               </input>
//               <button onClick={postBook}>Add Data</button> */}
//             </Box>
//           </Modal>
//         </header>
//       </div>
//     </>
//   );
// };

// export default App;

import Button from "@suid/material/Button";
import Stack from "@suid/material/Stack";
import { createSignal, For, onMount, Show } from "solid-js";
import IconButton from "@suid/material/IconButton";
import DeleteIcon from "@suid/icons-material/Delete";
import Divider from "@suid/material/Divider";
import styles from "./App.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Center } from "@hope-ui/solid";
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
  },
});
function Api() {
  const [users, setUsers] = createSignal([]);
  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(res.json());
    const result = await res.json();
    console.log(result);
    setUsers(result);
  };
  const deleteUser = async (id: number) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });
    console.log(id);
    setUsers(users().filter((u) => u.id !== id));
  };
  const addUser = async () => {
    const name = document.getElementById("post").value;
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    let data = await res.json();
    setUsers([...users(), data]);
  };
  return (
    <Center bg="$primary9" h="auto" color="white">
      <div>
        <h2>Api</h2>
        <Stack spacing={1} direction="column">
          <Button variant="contained" onClick={getUsers}>
            GET
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              addUser();
            }}
          >
            POST
          </Button>
        </Stack>
        <br />
        <input type="text" id="post"></input>
        <br />
        <br />
        <For each={users()}>
          {(item, i) => (
            <div class={styles.all}>
              <div class={styles.block}>
                {item.id}. {item.name}
                <div class={styles.right}>
                  {/* <ThemeProvider theme={theme}> */}
                  <IconButton
                    sx={{ padding: 0 }}
                    color="primary"
                    aria-label="delete"
                  >
                    <DeleteIcon onClick={() => deleteUser(item.id)} />
                  </IconButton>
                  {/* </ThemeProvider> */}
                </div>
                <Divider />
              </div>
            </div>
          )}
        </For>
      </div>
    </Center>
  );
}
export default Api;
