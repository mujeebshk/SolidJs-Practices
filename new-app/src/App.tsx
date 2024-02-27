import type { Component } from "solid-js";
import Treeview from "./Treeview";
import Tests from "./Tests";
import Data from "./Data";
import Sample from "./sample";
// import Box from "@suid/material/Box";
import Grid from "@suid/material/Grid";
import Paper from "@suid/material/Paper";
import styled from "@suid/material/styles/styled";
import Avatar from "@suid/material/Avatar";
import Typography from "@suid/material/Typography";
import Button from "@suid/material/Button";

import { SimpleGrid } from "@hope-ui/solid";
import { Box } from "@hope-ui/solid";

import { Tabs, TabList, Tab, TabPanel } from "@hope-ui/solid";
import logo from "./logo.svg";
import styles from "./App.module.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const App: Component = () => {
  return (
    <div>
      <div class={styles.title}>
        <Typography style="h1" component="div" gutterBottom>
          Atom Cloud
        </Typography>
      </div>
      <Tabs variant="outline" alignment="center" colorScheme="success">
        <TabList>
          <Tab>Data</Tab>
          <Tab>Query</Tab>
          <Tab>Tests</Tab>
          <div class={styles.avatar}>
            <Avatar>M</Avatar>
          </div>
        </TabList>
        <TabPanel>
          <Data />
          {/* <Sample /> */}
        </TabPanel>
        <TabPanel>
          <Treeview />
        </TabPanel>
        <TabPanel>
          <Tests />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default App;
