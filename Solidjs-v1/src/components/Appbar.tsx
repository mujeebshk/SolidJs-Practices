import AppBar from "@suid/material/AppBar";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Avatar from "@suid/material/Avatar";
import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";
import MailIcon from "@suid/icons-material/NotificationsTwoTone";
import Badge from "@suid/material/Badge";
import styles from "./App.module.css";

export default function BasicAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgb(10, 150, 110)" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <strong>ATOM CLOUD</strong>
          </Typography>
          <div class={styles.search}>
            <input class={styles.input} type="text" placeholder="search" />
            <br />
            <Badge
              badgeContent={4}
              color="primary"
              sx={{ margin: "0 1em 0 3em" }}
            >
              <MailIcon color="action" />
            </Badge>
          </div>
          <Avatar
            alt="Mujeeb"
            // src="./profile-pic(3).png"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
