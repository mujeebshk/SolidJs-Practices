import AppBar from "@suid/material/AppBar";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";
import type { Component } from "solid-js";
import Library from "./Library";

const Nav: Component = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          position: "sticky",
          top: 0,
        }}
      >
        <AppBar
          position="static"
          sx={{
            // backgroundColor: "#2f4858",
            backgroundColor: "#A3A9AA",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Developers Library
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <section class="section">
        <div class="nan"></div>
        <Library />
      </section>
    </>
  );
};
export default Nav;
