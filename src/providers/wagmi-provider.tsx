"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";
import { type State, WagmiProvider as WagmiProv } from "wagmi";
import { NEROPaymasterProvider } from "@nerochain/aa-sdk"; 

import { getConfig } from "@/lib/wagmi";

export default function WagmiProvider(props: {
  children: ReactNode;
  initialState?: State;
}) {
  const [config] = useState(() => getConfig());
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProv config={config} initialState={props.initialState}>
      <NEROPaymasterProvider 
        config={config}
        options={{
          gasToken: 'USDT', // Default gas token
          sponsorshipRules: 'dynamic' 
        }}
      >
        <QueryClientProvider client={queryClient}>
          {props.children}
        </QueryClientProvider>
      </NEROPaymasterProvider>
    </WagmiProv>
  );
}