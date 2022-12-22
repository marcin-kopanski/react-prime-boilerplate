import { useToasts } from "@/centexts";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import { FC, PropsWithChildren } from "react";

export const Demo: FC<PropsWithChildren> = () => {
  const toasts = useToasts();

  return (
    <>
      <Panel header="Toast">
        <div className="w-full flex flex-row gap-2">
          <Button onClick={() => toasts.showInfo("details", "summary")}>
            Info
          </Button>
          <Button onClick={() => toasts.showSuccess("details", "summary")}>
            Success
          </Button>
          <Button onClick={() => toasts.showWarning("details", "summary")}>
            Warning
          </Button>
          <Button onClick={() => toasts.showError("details", "summary")}>
            Error
          </Button>
          <Button
            onClick={() =>
              toasts.showConfirm(
                "warn",
                "header",
                "message",
                () => toasts.showSuccess("ok"),
                () => toasts.showInfo("cancel"),
              )
            }
          >
            Confirm
          </Button>
        </div>
      </Panel>
    </>
  );
};
