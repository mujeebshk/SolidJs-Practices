import { Tabs, TabList, Tab, TabPanel, Heading, Button } from "@hope-ui/solid";
import { Avatar, AvatarBadge, AvatarGroup, AvatarExcess } from "@hope-ui/solid";
import styles from "../App.module.css";
import Dashboard from "./Dash";
import Data from "./Data";
import KeyboardArrowRightOutlinedIcon from "@suid/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@suid/icons-material/KeyboardArrowLeftOutlined";
import { SplitY, SplitX } from "./Resize";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@hope-ui/solid";
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
import { Show } from "solid-js";
import "./Login.css";
import { createSignal } from "solid-js";
// import Dashboard from "./Dashboard";
// import DataDash from "./DataDash";
import MailIcon from "@suid/icons-material/GridViewOutlined";
import Badge from "@suid/material/Badge";
import StorageSharpIcon from "@suid/icons-material/StorageSharp";
import InsightsSharpIcon from "@suid/icons-material/InsightsSharp";
import DashboardSharpIcon from "@suid/icons-material/DashboardOutlined";
import Chat from "@suid/icons-material/ChatOutlined";
import Logout from "@suid/icons-material/LogoutOutlined";
import SettingsSuggestTwoToneIcon from "@suid/icons-material/SettingsSuggestTwoTone";
export default function Sidebar() {
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loggedIn, setLoggedIn] = createSignal(false);
  const toggle = () => setLoggedIn(!loggedIn());
  const [SignedIn, setSignedIn] = createSignal(false);
  const signed = () => setSignedIn(!SignedIn());
  return (
    <>
      {/* <div
        class="button"
        style="position:relative; top: 15%; border: 1px solid #eee; height: fit-content;"
      > */}
      <div style="width: 100%; height: 100%">
        <SplitY>
          <SplitX>
            <Tabs orientation="vertical" variant="pills">
              <Show
                when={SignedIn()}
                fallback={
                  <>
                    <KeyboardArrowRightOutlinedIcon onClick={signed} />
                  </>
                }
              >
                <div class={styles.tablist}>
                  <Heading
                    color="$info11"
                    css={{ margin: ".3em 0 .5em 1em" }}
                    size="2xl"
                  >
                    Atom Cloud
                  </Heading>

                  <TabList
                    css={{
                      outline: "none",
                      border: "none",
                    }}
                  >
                    <Tab
                      css={{
                        display: "flex",
                        justifyContent: "start",
                        margin: ".4em 0",
                      }}
                    >
                      <div style="margin-right: .6em">
                        <Badge sx={{ color: "white" }}>
                          <MailIcon color="info" />
                        </Badge>
                      </div>
                      <h6>Dashboard</h6>
                    </Tab>
                    <Tab
                      css={{
                        display: "flex",
                        justifyContent: "start",
                        margin: ".4em 0",
                      }}
                    >
                      <div style="margin-right: .6em">
                        <Badge sx={{ color: "white" }}>
                          <StorageSharpIcon color="info" />
                        </Badge>
                      </div>
                      Data
                    </Tab>
                    <Tab
                      css={{
                        display: "flex",
                        justifyContent: "start",
                        margin: ".4em 0",
                      }}
                    >
                      <div style="margin-right: .6em">
                        <Badge sx={{ color: "white" }}>
                          <InsightsSharpIcon color="info" />
                        </Badge>
                      </div>
                      Explore
                    </Tab>
                    <Tab
                      css={{
                        display: "flex",
                        justifyContent: "start",
                        margin: ".4em 0",
                      }}
                    >
                      <div style="margin-right: .6em">
                        <Badge sx={{ color: "white" }}>
                          <DashboardSharpIcon color="info" />
                        </Badge>
                      </div>
                      Boards
                    </Tab>
                    <div style="border-bottom: 2px solid #eee;"></div>
                    <Tab
                      css={{
                        display: "flex",
                        justifyContent: "start",
                        margin: ".4em 0",
                      }}
                    >
                      <div style="margin-right: .6em">
                        <Badge sx={{ color: "white" }}>
                          <SettingsSuggestTwoToneIcon color="info" />
                        </Badge>
                      </div>
                      Settings
                      <Badge
                        sx={{ marginLeft: "1em" }}
                        color="warning"
                        variant="dot"
                      ></Badge>
                    </Tab>
                    <Tab
                      css={{
                        display: "flex",
                        justifyContent: "start",
                        margin: ".4em 0",
                      }}
                    >
                      <div style="margin-right: .6em">
                        <Badge sx={{ color: "white" }}>
                          <Chat color="info" />
                        </Badge>
                      </div>
                      Help & Support
                    </Tab>
                    <Tab
                      css={{
                        display: "flex",
                        justifyContent: "start",
                        margin: ".4em 0",
                      }}
                    >
                      <div style="margin-right: .6em">
                        <Badge sx={{ color: "white" }}>
                          <Logout color="info" />
                        </Badge>
                      </div>
                      Log out
                    </Tab>
                    <div class={styles.avatar}>
                      <Avatar
                        onClick={handleOpen}
                        css={{ border: "3px outset #bbd5ef" }}
                        name="Micheal Dunn"
                        src="https://bit.ly/3t5O04P"
                      />
                      <h3 style="margin-left: .8em">Ralph Edwards</h3>
                    </div>
                    <Modal size="full" opened={open()} onClose={handleClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalBody css={{ marginTop: "5em" }}>
                          <div id="boy" class="box-form">
                            <div class="left">
                              <div class="overlay">
                                <h1>Hello World.</h1>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Curabitur et est sed felis
                                  aliquet sollicitudin
                                </p>
                                <span>
                                  <p>login with social media</p>
                                  <a href="#">
                                    <i
                                      class="fa fa-facebook"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Facebook
                                  </a>
                                  <a href="#">
                                    <i
                                      class="fa fa-twitter"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Login with Twitter
                                  </a>
                                </span>
                              </div>
                            </div>

                            <div class="right">
                              <h5>Login</h5>
                              <p>
                                Don't have an account?{" "}
                                <a href="#">Creat Your Account</a> it takes less
                                than a minute
                              </p>
                              <div class="inputs">
                                <input type="text" placeholder="user name" />
                                <br />
                                <input type="password" placeholder="password" />
                              </div>

                              <br />
                              <br />

                              <div class="remember-me--forget-password">
                                <label>
                                  <input type="checkbox" name="item" checked />
                                  <span class="text-checkbox">Remember me</span>
                                </label>
                                <p>forget password?</p>
                              </div>

                              <br />
                              <button onClick={handleClose}>Login</button>
                            </div>
                          </div>
                        </ModalBody>
                      </ModalContent>
                    </Modal>
                  </TabList>
                  {/* <Tag size="lg">
            <TagLeftIcon as={SettingsSuggestTwoToneIcon} />
            <TagLabel>Tag</TagLabel>
          </Tag> */}
                </div>
                <>
                  <KeyboardArrowLeftOutlinedIcon onClick={signed} />
                </>
              </Show>
              <SplitY>
                <TabPanel css={{ marginTop: "5em" }}>
                  <Dashboard />
                </TabPanel>
                <TabPanel>
                  <Data />
                </TabPanel>
                <TabPanel css={{ marginTop: "5em" }}>
                  <section>
                    <h1>Query Table</h1>
                    <textarea
                      style="width: 74em;
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
                        <TableCaption>
                          Imperial to metric conversion factors
                        </TableCaption>
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
                <TabPanel
                  css={{ position: "absolute", left: "45%", top: "50%" }}
                >
                  <h1 style="font-size: xx-large;">Updates to come...</h1>
                </TabPanel>
                <TabPanel
                  css={{ position: "absolute", left: "45%", top: "50%" }}
                >
                  <h1 style="font-size: xx-large;">Updates to come...</h1>
                </TabPanel>
                <TabPanel
                  css={{ position: "absolute", left: "45%", top: "50%" }}
                >
                  <h1 style="font-size: xx-large;">Updates to come...</h1>
                </TabPanel>
                <TabPanel
                  css={{ position: "absolute", left: "45%", top: "50%" }}
                >
                  <h1 style="font-size: xx-large;">Updates to come...</h1>
                </TabPanel>
              </SplitY>
            </Tabs>
          </SplitX>
        </SplitY>
      </div>
    </>
  );
}
