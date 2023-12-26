import "./Buttons.css";

const Buttons = (props) => {
  return (
    <div className="btn-wrapper">
      <button onClick={props.clearHolder} className="btn">
        Clear All
      </button>
      <button onClick={() => props.handleFilterChange('all')} className="btn">
        All
      </button>
      <button onClick={() => props.handleFilterChange('active')} className="btn">
        Active
      </button>
      <button onClick={() => props.handleFilterChange('completed')} className="btn">
        Complited
      </button>
      <button onClick={props.clearComleted} className="btn">
        Clear complited
      </button>
    </div>
  );
};

export default Buttons;
