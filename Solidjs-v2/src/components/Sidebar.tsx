import { Tabs, TabList, Tab, TabPanel, Button } from "@hope-ui/solid";
import {
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from "@hope-ui/solid";
import styles from "../App.module.css";
import Dashboard from "./Dashboard";
import DataDash from "./DataDash";
import MailIcon from "@suid/icons-material/GridViewSharp";
import Badge from "@suid/material/Badge";
import StorageSharpIcon from "@suid/icons-material/StorageSharp";
import InsightsSharpIcon from "@suid/icons-material/InsightsSharp";
import DashboardSharpIcon from "@suid/icons-material/DashboardSharp";
import CalendarMonthSharpIcon from "@suid/icons-material/CalendarMonthSharp";
import NotificationsNoneSharpIcon from "@suid/icons-material/NotificationsNoneSharp";
import SettingsSuggestTwoToneIcon from "@suid/icons-material/SettingsSuggestTwoTone";
import { render } from "solid-js/web";
import { createSignal, Show } from "solid-js";
export default function Sidebar() {
  const [loggedIn, setLoggedIn] = createSignal(false);
  const toggle = () => setLoggedIn(!loggedIn());
  return (
    <Tabs orientation="vertical">
      <div class={styles.tablist}>
        <TabList css={{ outline: "none", border: "none", color: "none" }}>
          <Tab css={{ display: "block" }}>
            <div>
              <Badge sx={{ color: "white" }}>
                <MailIcon color="info" />
              </Badge>
            </div>
            <h6>Menu</h6>
          </Tab>
          <Tab css={{ display: "block" }}>
            <div>
              <Badge sx={{ color: "white" }}>
                <StorageSharpIcon color="info" />
              </Badge>
            </div>
            Data
          </Tab>
          <Tab css={{ display: "block" }}>
            <div>
              <Badge sx={{ color: "white" }}>
                <InsightsSharpIcon color="info" />
              </Badge>
            </div>
            Explore
          </Tab>
          <Tab css={{ display: "block" }}>
            <div>
              <Badge sx={{ color: "white" }}>
                <DashboardSharpIcon color="info" />
              </Badge>
            </div>
            Boards
          </Tab>
          <Tab css={{ display: "block" }}>
            <div>
              <Badge sx={{ color: "white" }}>
                <CalendarMonthSharpIcon color="info" />
              </Badge>
            </div>
            Tasks
          </Tab>
          <Tab css={{ display: "block" }}>
            <div>
              <Badge sx={{ color: "white" }}>
                <NotificationsNoneSharpIcon color="info" />
              </Badge>
            </div>
            Alerts
          </Tab>
          <Tab css={{ display: "block" }}>
            <div>
              <Badge sx={{ color: "white" }}>
                <SettingsSuggestTwoToneIcon color="info" />
              </Badge>
            </div>
            Settings
          </Tab>
        </TabList>
      </div>
      <TabPanel css={{ width: "100%" }}>
        <Dashboard />
      </TabPanel>
      <TabPanel>
        <DataDash />
      </TabPanel>
      <TabPanel>
        <section>
          <h1>Query Table</h1>
          <textarea
            style="width: 75em;
            resize: none;
            height: 10em;
            border: 1px solid #000;
            border-radius: 5px;
            padding: 1em;
            margin-bottom: 1em;"
          >
            {" "}
            Select * From All
          </textarea>
        </section>
        <Show
          when={loggedIn()}
          fallback={<Button onClick={toggle}>Run</Button>}
        >
          <Button onClick={toggle}>Cancel</Button>
          <section style="border: 2px solid #efefef; margin-top:1em;">
            <Table highlightOnHover>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th numeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td numeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td numeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td numeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th numeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </section>
        </Show>
      </TabPanel>
      <TabPanel css={{ position: "absolute", left: "45%", top: "50%" }}>
        <h1 style="font-size: xx-large;">Updates to come...</h1>
      </TabPanel>
      <TabPanel css={{ position: "absolute", left: "45%", top: "50%" }}>
        <h1 style="font-size: xx-large;">Updates to come...</h1>
      </TabPanel>
      <TabPanel css={{ position: "absolute", left: "45%", top: "50%" }}>
        <h1 style="font-size: xx-large;">Updates to come...</h1>
      </TabPanel>
      <TabPanel css={{ position: "absolute", left: "45%", top: "50%" }}>
        <h1 style="font-size: xx-large;">Updates to come...</h1>
      </TabPanel>
    </Tabs>
  );
}
