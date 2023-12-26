import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [value, setValue] = useState("");

  const handleTextChange = (ev) => {
    setValue(ev.target.value)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (!value.trim()) {
      return;
    }

    props.onSubmit(value);
    setValue("");
  }

  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <div className="input">
          <button
            type="button"
            onClick={props.allSelected}
            className="inputbtn"
          >
            <img src="./select.png"></img>
          </button>
          <input
            type="text"
            placeholder="add yours txt..."
            value={value}
            onChange={handleTextChange}
          />
          <button type="submit" className="inputbtn">
            <img src="./add.png"></img>
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
