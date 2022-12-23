import { Button } from "primereact/button";
import { Toast, ToastSeverityType } from "primereact/toast";
import { createContext, FC, PropsWithChildren, useRef } from "react";

type State = {
  showInfo: (details: string, summary?: string) => void;
  showSuccess: (details: string, summary?: string) => void;
  showError: (details: string, summary?: string) => void;
  showWarning: (details: string, summary?: string) => void;
  showConfirm: (
    severity: ToastSeverityType,
    header: string,
    message: string,
    onConfirm: () => void,
    onCancel: () => void,
  ) => void;
};

export const ToastContext = createContext<State | undefined>(undefined);

export const ToastContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const toastTopRight = useRef<Toast>(null);
  const toastCenter = useRef<Toast>(null);

  const showToast = (
    severity: ToastSeverityType,
    detail: string,
    summary?: string,
  ): void => {
    toastTopRight.current?.show({
      severity,
      detail,
      summary,
      life: 10000,
    });
  };

  const showConfirm = (
    severity: ToastSeverityType,
    header: string,
    message: string,
    onConfirm: () => void,
    onCancel: () => void,
  ): void => {
    toastCenter.current?.show({
      severity,
      sticky: true,
      content: (
        <div className="flex flex-1 flex-column">
          <div className="text-center">
            <p className="text-2xl">{header}</p>
            <p className="">{message}</p>
          </div>
          <div className="grid p-fluid">
            <div className="col-6">
              <Button
                type="button"
                label="Yes"
                className="p-button-success"
                onClick={() => onConfirm && onConfirm()}
              />
            </div>
            <div className="col-6">
              <Button
                type="button"
                label="No"
                className="p-button-secondary"
                onClick={() => onCancel && onCancel()}
              />
            </div>
          </div>
        </div>
      ),
    });
  };

  const showInfo = (detail: string, summary?: string): void =>
    showToast("info", detail, summary);
  const showSuccess = (detail: string, summary?: string): void =>
    showToast("success", detail, summary);
  const showError = (detail: string, summary?: string): void =>
    showToast("error", detail, summary);
  const showWarning = (detail: string, summary?: string): void =>
    showToast("warn", detail, summary);

  return (
    <ToastContext.Provider
      value={{ showInfo, showSuccess, showError, showWarning, showConfirm }}
    >
      {children}
      <Toast ref={toastTopRight} position={"top-right"} />
      <Toast ref={toastCenter} position={"center"} />
    </ToastContext.Provider>
  );
};
