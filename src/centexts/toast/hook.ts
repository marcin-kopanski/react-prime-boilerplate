import { useContext } from "react";
import { ToastContext } from "./context";

export const useToasts = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToasts must be used within a ToastContext");
  }

  return context;
};
