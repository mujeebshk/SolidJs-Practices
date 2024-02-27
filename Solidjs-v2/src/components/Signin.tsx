import "./signin.css";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@hope-ui/solid";
import { createSignal } from "solid-js";
import Avatar from "@suid/material/Avatar";

export default function Signin() {
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div style="display:flex; align-items: center;">
        <Avatar
          alt="Mujeeb"
          onClick={handleOpen}
          // src="./profile-pic(3).png"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <h1 style="margin-left: 1em">Shin Ryujin</h1>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur et est sed felis aliquet sollicitudin
                  </p>
                  <span>
                    <p>login with social media</p>
                    <a href="#">
                      <i class="fa fa-facebook" aria-hidden="true"></i>Login
                      with Google
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter" aria-hidden="true"></i> Login
                      with Twitter
                    </a>
                  </span>
                </div>
              </div>

              <div class="right">
                <h5>Login</h5>
                <p>
                  Don't have an account? <a href="#">Creat Your Account</a> it
                  takes less than a minute
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
    </>
  );
}
