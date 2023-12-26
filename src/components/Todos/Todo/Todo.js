import { useState } from "react";
import "./Todo.css";

const Todo = (props) => {
  const [isEdited, setEdited] = useState(false);
  const [editText, seteditText] = useState(props.todo.text);

  const goToggle = () => {
    props.onToggle(props.todo.id);
  };

  const goDelete = (e) => {
    e.stopPropagation();
    props.onDelete(props.todo.id);
  };

  const handleEdit = () => {
      setEdited(true);
    if (props.todo.done) {
        setEdited(false)
    }

  };

  const handleInputChange = (e) => {
    seteditText(e.target.value);
  };

  const handleWrapperDoubleClick = (e) => {
    if (e.target.classList.contains("accept")) {
      e.stopPropagation();
    }
  };

const editTextTodo = () => {
    setEdited(false)
                props.todo.text = editText
}

  return (
    <li
      onDoubleClick={handleEdit}
      className={`todo ${
        props.todo.done ? "done" : isEdited  ? "edit" : ""
      }`}
      key={props.todo.id}
    >
      <div className="todo-wrapper" onDoubleClick={handleWrapperDoubleClick}>
        <img
          src={props.todo.done ? "./accetp.png" : "./noaccept.png"}
          alt="accept"
          className="accept"
          onClick={goToggle}
        ></img>
        {isEdited  ? (
          <input
            type="text"
            value={editText}
            onChange={handleInputChange}
            onBlur={editTextTodo}
          />
        ) : (
          <span>{props.todo.text}</span>
        )}
      </div>
      <img
        src="./deletebut.png"
        alt="delete"
        className="delete"
        onClick={goDelete}
      ></img>
    </li>
  );
};

export default Todo;
