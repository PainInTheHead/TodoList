import { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import Total from "./Total/Total";
import Todos from "./Todos/Todos";
import Buttons from "./Buttons/Buttons";

function App() {
  const [todos, setTodos] = useState([]);
  const [flags, setFlags] = useState("all");

  const completedTodos = todos.filter((todo) => todo.done).length;
  const activedTodos = todos.filter((todo) => !todo.done).length;

  const FilterActive = todos.filter((todo) => !todo.done);
  const FilterCompleted = todos.filter((todo) => todo.done);

  const clearComleted = () => {
    setTodos(FilterActive);
  };

  const allSelected = () => {
    setTodos(
      todos.map((todo) => {
        if (completedTodos === todos.length) {
          return { ...todo, done: false };
        } else {
          return { ...todo, done: true };
        }
      })
    );
  };

  const openAll = () => {
    setFlags("all");
  };

  const openComplited = () => {
    setFlags("complited");
  };
  const openActive = () => {
    setFlags("active");
  };

  const putTodo = (value) => {
    if (value) {
      const newTodo = { id: Date.now(), text: value, done: false };
      setTodos([...todos, newTodo]);
    } else {
      alert("add yours txt pls!");
    }
  };

  const clearHolder = () => {
    setTodos([]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          done: !todo.done,
        };
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  let filteredTodos =
    flags === "active"
      ? FilterActive
      : flags === "complited"
      ? FilterCompleted
      : flags === "all"
      ? todos
      : todos;

  return (
    <div className="container">
      <Form allSelected={allSelected} putTodo={putTodo} />
      <Total completedTodos={completedTodos} activedTodos={activedTodos} />
      <Todos
        filteredTodos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />

      {todos.length !== 0 && (
        <Buttons
          clearHolder={clearHolder}
          openAll={openAll}
          openComplited={openComplited}
          clearComleted={clearComleted}
          openActive={openActive}
        />
      )}
    </div>
  );
}

export default App;
