import styles from "./App.module.css";
import TodoList from "./components/TodoList";
import { createSignal } from "solid-js";
import TodosCompleted from "./components/TodosCompleted";
import Nav from "./components/Nav";
import { TodosProvider } from "./TodosProvider";
import { Switch, Match } from "solid-js";
import Appbar from "./components/Appbar";
import Table from "./components/Table";

const AllTodos = () => (
  <section>
    <TodoList />
    <TodosCompleted />
  </section>
);

function App() {
  const [viewSelected, setViewSelected] = createSignal("all");
  const defaultTodos = {
    items: [
      { text: "Finish SolidJS demo", completed: false },
      { text: "Write blog post about SolidJS", completed: false },
    ],
  };

  return (
    <>
      <Appbar />
      <TodosProvider todoItems={defaultTodos}>
        <div class={styles.App}>
          <Nav setView={setViewSelected} view={viewSelected} />
          <Switch>
            <Match when={viewSelected() === "dashboard"}>
              <TodoList />
            </Match>
            <Match when={viewSelected() === "tables"}>
              <Table />
            </Match>
            <Match when={viewSelected() === "query"}>
              <TodosCompleted />
            </Match>
          </Switch>
        </div>
      </TodosProvider>
    </>
  );
}

export default App;
