"use client";

import defaultOptions from "@/core/config/reactQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// eslint-disable-next-line
const queryClient = new QueryClient({defaultOptions});
function TanstackProvider({ children }) {

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstackProvider;