import type { Component } from "solid-js";
import BasicAppBar from "./components/Appbar";
import Sidebar from "./components/Sidebar";
const App: Component = () => {
  return (
    <div>
      <BasicAppBar />
      <Sidebar />
    </div>
  );
};

export default App;
