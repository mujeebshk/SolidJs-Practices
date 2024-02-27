import { useTodos } from "../TodosProvider";
import { Show, For } from "solid-js";

const TodosCompleted = () => {
  // const [todos, { toggleTodo }] = useTodos();

  return (
    <section>
      <h1>Query Table</h1>
      <textarea
        style="width: 75em;
resize: none;
height: 10em;
border: 1px solid #000;
border-radius: 5px;"
      >
        {" "}
        Select * From All
      </textarea>
      {/* <Show
        when={todos.items.filter((t) => t.completed).length}
        fallback={() => <p>No completed items (yet!)</p>}
      >
        <For each={todos.items.filter((t) => t.completed)}>
          {(item) => {
            return (
              <li>
                <input
                  type="checkbox"
                  name={item.text}
                  checked={true}
                  onClick={() => toggleTodo(item.text)}
                />
                <label for={item.text}>{item.text}</label>
              </li>
            );
          }}
        </For>
      </Show> */}
    </section>
  );
};

export default TodosCompleted;
