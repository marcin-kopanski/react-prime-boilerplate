import { useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Menubar } from "primereact/menubar";

export const Dictionaries = () => {
  const navigate = useNavigate();

  const menuItems = useMemo(
    () => [
      {
        label: "Authors",
        command: () => navigate("/dicts/authors"),
      },
      {
        label: "Countries",
        command: () => navigate("/dicts/countries"),
      },
      {
        label: "Genres",
        command: () => navigate("/dicts/genres"),
      },
      {
        label: "Years",
        command: () => navigate("/dicts/years"),
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
