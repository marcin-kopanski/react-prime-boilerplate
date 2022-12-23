import { useUser } from "@/contexts/user/context-hook";
import { Menubar } from "primereact/menubar";
import { useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const MainOutlet = () => {
  const navigate = useNavigate();
  const { state } = useUser();

  const menuItems = useMemo(
    () => [
      {
        label: "Books",
        command: () => navigate("/books"),
      },
      {
        label: "Dicts",
        command: () => navigate("/dicts"),
      },
      {
        label: "Demo",
        command: () => navigate("/demo"),
      },
    ],
    [],
  );

  const endTemplate = (
    <p className="m-0 p-0 mr-2">{state.user && `Hello, ${state.user.name}!`}</p>
  );

  return (
    <>
      <Menubar model={menuItems} end={endTemplate} className="mb-2" />
      <Outlet />
    </>
  );
};
