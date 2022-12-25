import { FC, PropsWithChildren } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ToastContextProvider, UserContextProvider } from "@/contexts";
import { queryClient } from "@/services";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ToastContextProvider>
      <UserContextProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </UserContextProvider>
    </ToastContextProvider>
  );
};
