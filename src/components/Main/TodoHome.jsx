import TodoHeader from "./TodoPage/TodoHeader";
import TaskBar from "./TodoPage/TaskBar";

import CompletedBar from "./TodoPage/CompletedBar";
import { useState } from "react";
import Tabs from "./TodoPage/Tabs";
//import ModalComp from "../ui/ModalComp";

const TodoHome = () => {
  const [todoFilter, setTodoFilter] = useState("all-todos");
  console.log(todoFilter);
  return (
    <div>
      <TodoHeader></TodoHeader>
      <Tabs setTodoFilter={setTodoFilter}></Tabs>
      <TaskBar todoFilter={todoFilter}></TaskBar>
      {/* <DataBar></DataBar> */}
      <CompletedBar></CompletedBar>
    </div>
  );
};

export default TodoHome;
