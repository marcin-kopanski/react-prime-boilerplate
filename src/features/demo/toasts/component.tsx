import { useToasts } from "@/contexts";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";

export const ToastsDemo = () => {
  const toasts = useToasts();

  return (
    <Panel header="Toast">
      <div className="w-full flex flex-row gap-2">
        <Button
          className="p-button-info"
          onClick={() => toasts.showInfo("details", "summary")}
        >
          Info
        </Button>
        <Button
          className="p-button-success"
          onClick={() => toasts.showSuccess("details", "summary")}
        >
          Success
        </Button>
        <Button
          className="p-button-warning"
          onClick={() => toasts.showWarning("details", "summary")}
        >
          Warning
        </Button>
        <Button
          className="p-button-danger"
          onClick={() => toasts.showError("details", "summary")}
        >
          Error
        </Button>
        <Button
          className="p-button-help"
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
  );
};
