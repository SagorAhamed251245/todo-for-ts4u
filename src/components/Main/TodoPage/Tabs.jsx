import { Button } from "react-bootstrap";
import "../../../Styles/Pages/TodoPage.scss/AllTodo.scss";

//import { FcTodoList } from "react-icons/fc";
const Tabs = ({ setTodoFilter }) => {
  return (
    <div className="alltodo-container">
      <div className="tabs">
        <Button variant="primary" onClick={() => setTodoFilter("today")}>
          Today
        </Button>
        <Button variant="primary" onClick={() => setTodoFilter("pending")}>
          Pending
        </Button>
        <Button variant="primary" onClick={() => setTodoFilter("overdue")}>
          Overdue
        </Button>
        <Button variant="primary" onClick={() => setTodoFilter("completed")}>
          Completed
        </Button>
      </div>
    </div>
  );
};

export default Tabs;
