import { useContext, useReducer, useState } from "react";
import tasksReducer from "./reducers/tasksReducer";
import TasksContext from "./contexts/tasksContext";
import AuthContext from "./contexts/authContext";
import useTask from "../state-management/hooks/useTasks";
import useAuth from "../state-management/hooks/useAuth";

const TaskList = () => {
  const context = useTask();
  const { user } = useAuth();
  return (
    <>
      <button
        onClick={() =>
          context.dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() + user },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {context.tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() =>
                context.dispatch({ type: "DELETE", taskID: task.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
