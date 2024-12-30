import { MdAddTask } from "react-icons/md";
import "../../../Styles/Pages/TodoPage.scss/TaskBar.scss";
import Todays from "../../ui/Todos/Todays";
import Pending from "../../ui/Todos/Pending";
import AllTodos from "./AllTodos";
import TodoModal from "./TodoModal";
import { useState } from "react";

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ModalComp from "../../ui/ModalComp";

const TaskBar = ({ todoFilter }) => {
  const todos = [
    { id: 1, name: "First todo", date: "1", status: "pending" },
    { id: 1, name: "First todo", date: "2", status: "pending" },
  ];
  const [showModal, setShowModal] = useState(false);
  function TodoFilter() {
    if (todos.length < 1) {
      return (
        <div className="data-img">
          <img src="src/assets/Images/DataImage.png" alt="" />
        </div>
      );
    } else if (todoFilter === "today") {
      return <Todays todos={todos} />;
    } else if (todoFilter === "pending") {
      return <Pending />;
    } else {
      <AllTodos />;
    }
  }
  return (
    <div className="task-container">
      <div className="task-box">
        <h2>Tasks</h2>
        <button className="task-btn" onClick={() => setShowModal(true)}>
          <MdAddTask />
          Add Task
        </button>
      </div>
      <div className="data-container">
        {todos?.length < 1 ? (
          <div className="data-img">
            <img src="src/assets/Images/DataImage.png" alt="" />
          </div>
        ) : todoFilter === "today" ? (
          <Todays todos={todos} />
        ) : todoFilter === "pending" ? (
          <Pending />
        ) : (
          <AllTodos />
        )}
        {/* {TodoFilter()} */}
      </div>
      <TodoModal setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
};

export default TaskBar;
