import { Menubar } from "primereact/menubar";
import { useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const MainOutlet = () => {
  const navigate = useNavigate();

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

  return (
    <>
      <Menubar model={menuItems} className="mb-2" />
      <Outlet />
    </>
  );
};
