import "./Total.css";

const Total = (props) => {
  return (
    <div className="total">
      <span>{props.activedTodos} item left</span>
      <span>Complete Todos: {props.completedTodos}</span>
    </div>
  );
};

export default Total;
