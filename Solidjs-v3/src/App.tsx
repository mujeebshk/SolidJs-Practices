import type { Component } from "solid-js";
import SideMenu from "./components/SideMenu";
import { SplitY, SplitX } from "./components/Resize";

import MailIcon from "@suid/icons-material/NotificationsNoneOutlined";
import Badge from "@suid/material/Badge";
import "./App.css";
import { render } from "solid-js/web";
import { createSignal, Show } from "solid-js";
import { useColorMode } from "@hope-ui/solid";
import LightModeOutlinedIcon from "@suid/icons-material/LightModeOutlined";
import NightsStayOutlinedIcon from "@suid/icons-material/NightsStayOutlined";
const App: Component = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [loggedIn, setLoggedIn] = createSignal(false);
  const toggle = () => setLoggedIn(!loggedIn());

  return (
    <div style="display: -webkit-box;">
      <SideMenu />
      <form class="inline">
        <div class="input-icons">
          <i class="fa fa-search icon"></i>
          <input class="input-field" type="text" placeholder="Search" />
        </div>
        <Badge
          onClick={toggleColorMode}
          sx={{ alignSelf: "center" }}
          badgeContent={4}
          color="primary"
        >
          <MailIcon color="primary" />
        </Badge>
        <div>
          <Show
            when={loggedIn()}
            fallback={
              <>
                <div onClick={toggleColorMode}>
                  <LightModeOutlinedIcon onClick={toggle} />
                </div>
              </>
            }
          >
            <>
              <div onClick={toggleColorMode}>
                <NightsStayOutlinedIcon onClick={toggle} />
              </div>
            </>
          </Show>
        </div>
      </form>
      <div class="border"></div>
    </div>

    // <div style="width: 100%; height: 100%">
    //   <SplitY>
    //     <SplitX>
    //       <div>Y1 X1</div>
    //       <SplitY>
    //         <div>Y1 X2 Y1</div>
    //       </SplitY>
    //     </SplitX>
    //   </SplitY>
    // </div>
  );
};

export default App;
