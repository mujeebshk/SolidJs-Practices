import styles from "./TodoList.module.css";
import { useTodos } from "../TodosProvider";
import { For } from "solid-js";
import Alert from "@suid/material/Alert";
import { notificationService, Button } from "@hope-ui/solid";
import "./TodoList.module.css";
const TodoList = () => {
  const showNotification = () => {
    notificationService.show({
      // loading: true,
      status: "success",
      title: "Default notification",
      description: "Hey there, your code is awesome! 🤥",
    });
  };
  //   let input;
  //   const [todos, { addTodo, toggleTodo }] = useTodos();

  //   const addTodoItem = (input) => {
  //     if (!input.value.trim()) return;
  //     addTodo(input.value);
  //     input.value = "";
  //   };

  return (
    // <section class={styles.TodoList}>
    <div>
      <h1>Upload File</h1>
      <section class={styles.image}>
        <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2015/11/drag-drop-upload-2.gif" />
        {/* <input type="file"></input> */}
      </section>
      <Button onClick={showNotification}>Show notification</Button>
      {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
    </div>
    /* <label for="todo-item" class="sr-only">
        Todo item
      </label>
      <input
        ref={input}
        type="text"
        name="todo-item"
        id="todo-item"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodoItem(input);
          }
        }}
      />
      <button
        onClick={() => {
          addTodoItem(input);
        }}
        aria-label="add item"
      >
        +
      </button>
      <ul>
        <For each={todos.items.filter((t) => !t.completed)}>
          {(item) => (
            <li>
              <input
                type="checkbox"
                name={item.text}
                onClick={() => toggleTodo(item.text)}
              />
              <label for={item.text}>{item.text}</label>
            </li>
          )}
        </For>
      </ul>
    </section>
    */
  );
};

export default TodoList;
