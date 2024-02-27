import type { Component } from "solid-js";
import { glob as globalStyle } from "solid-styled-components";
import Nav from "./Navbar";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <>
      <div class={styles.App}>
        <header class={styles.header}>
          <h1>Digital Library</h1>
        </header>
      </div>
      <Nav />
    </>
  );
};

export default App;
globalStyle(`
.section{
  height: 95vh;
  overflow: hidden;
  background-color: #F3F6F6;
}
input{
  width: 100%;
  height:3.5em;
  margin:.5em;
  padding:0;
  padding-left: 1em;
  font-size:.9em;
}
.nan{
  margin:10em 0 0 0;
}
`);
