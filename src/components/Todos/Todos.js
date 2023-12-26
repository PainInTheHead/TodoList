import "./Todos.css";
import Todo from "./Todo/Todo";

const Todos = (props) => {
  return (
    <ul className="todos">
      {props.filteredTodos.map((todo) => {
        return (
          <Todo todo={todo} 
          onToggle={props.toggleTodo}
          onDelete={props.deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
