import { useToasts } from "@/centexts";
import { FC, PropsWithChildren } from "react";
import { ToastsDemo } from "./toasts";
import { UserDemo } from "./user";

export const Demo: FC<PropsWithChildren> = () => {
  const toasts = useToasts();

  return (
    <div className="flex flex-column gap-2">
      <ToastsDemo />
      <UserDemo />
    </div>
  );
};
