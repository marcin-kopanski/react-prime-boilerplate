import { useUser } from "@/contexts/user/context-hook";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";

export const UserDemo = () => {
  const { state, dispatch } = useUser();

  return (
    <Panel header="User">
      <p>{state.user ? `Hello, ${state.user.name}!` : "Please Log In"}</p>
      <div className="flex flex-row gap-2">
        <Button
          onClick={() =>
            dispatch({
              type: "login",
              payload: { id: 1, name: "Marcin", email: "test@test.pl" },
            })
          }
        >
          Login
        </Button>
        <Button onClick={() => dispatch({ type: "logout" })}>Logout</Button>
      </div>
    </Panel>
  );
};
