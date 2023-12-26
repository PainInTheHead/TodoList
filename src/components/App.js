import React, { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import Total from "./Total/Total";
import Todos from "./Todos/Todos";
import Buttons from "./Buttons/Buttons";

function App() {
  const [todos, setTodos] = useState([]);
  const [flags, setFlags] = useState("all");

  const completedTodos = React.useMemo(() => {
    return todos.filter((todo) => todo.done).length;
  }, [todos]);

  const activedTodoss = React.useMemo(() => {
    return todos.filter((todo) => !todo.done).length;
  }, [todos]);

  const clearComleted = () => {
    const FilterActive = todos.filter((todo) => !todo.done);
    setTodos(FilterActive);
  };

  const allSelected = () => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          done: completedTodos !== todos.length,
        };
      })
    );
  };

  const handleFilterChange = (filter) => {
    setFlags(filter);
  };

  const putTodo = (value) => {
    const newTodo = { id: Date.now(), text: value, done: false };
    setTodos([...todos, newTodo]);
  };

  const clearHolder = () => {
    setTodos([]);
  };

  const toggleTodo = (id) => {
    const updatedTodoList = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      return {
        ...todo,
        done: !todo.done,
      };
    });

    setTodos(updatedTodoList);
  };

  const deleteTodo = (id) => {
    const todoFilterDelete = todos.filter((todo) => todo.id !== id);
    setTodos(todoFilterDelete);
  };

  const filteredTodos = React.useMemo(() => {
    if (flags === "all") {
      return todos;
    }

    return todos.filter((todo) => {
      if (flags === "active") {
        return !todo.done;
      }
      return todo.done;
    });
  }, [todos, flags]);

  return (
    <div className="container">
      <h1 className="title">Todos</h1>
      <Form allSelected={allSelected} onSubmit={putTodo} />
      <Total completedTodos={completedTodos} activedTodos={activedTodoss} />
      <Todos
        filteredTodos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />

      {todos.length !== 0 && (
        <Buttons
          clearHolder={clearHolder}
          clearComleted={clearComleted}
          handleFilterChange={handleFilterChange}
        />
      )}
    </div>
  );
}

export default App;
