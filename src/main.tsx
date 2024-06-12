import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 4,
      cacheTime: 300_000, //5min
      staleTime: 10 * 1000, // 10sec
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
