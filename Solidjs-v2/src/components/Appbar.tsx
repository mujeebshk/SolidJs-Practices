import AppBar from "@suid/material/AppBar";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Avatar from "@suid/material/Avatar";
import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";
import MailIcon from "@suid/icons-material/Notifications";
import Badge from "@suid/material/Badge";
import styles from "../App.module.css";
import Signin from "./Signin";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorMode,
} from "@hope-ui/solid";
import { createSignal } from "solid-js";
export default function BasicAppBar() {
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgb(50, 150, 200)" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <strong>ATOM CLOUD</strong>
          </Typography>
          <div class={styles.search}>
            <input class={styles.input} type="text" placeholder="search" />
            <br />
            <Badge
              onClick={toggleColorMode}
              badgeContent={4}
              color="primary"
              sx={{ margin: "0 1em 0 3em" }}
            >
              {/* HI {colorMode() === "light" ? "dark" : "light"} */}
              <MailIcon color="primary" />
            </Badge>
          </div>
          <Signin />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
