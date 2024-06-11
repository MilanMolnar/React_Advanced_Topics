import { useContext, useReducer } from "react";
import AuthContext from "./contexts/authContext";
import useAddTodo from "../hooks/useAddTodo";
import useAuth from "../state-management/hooks/useAuth";

const LoginStatus = () => {
  const context = useAuth();
  if (context.user)
    return (
      <>
        <div>
          <span className="mx-2">{context.user}</span>
          <a onClick={() => context.dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() =>
          context.dispatch({ type: "LOGIN", username: "milan@email.com" })
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
