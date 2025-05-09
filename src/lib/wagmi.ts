import { http, cookieStorage, createConfig, createStorage } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { neroChain } from "@nerochain/sdk"; // Add NERO Chain
import { 
  coinbaseWallet,
  neroSmartWallet // Add NERO's smart wallet connector
} from "wagmi/connectors";

// NERO Paymaster configuration
const neroPaymasterConfig = {
  sponsorship: {
    default: 'conditional', // Options: 'full', 'partial', 'conditional', 'none'
    rules: {
      firstTimeUser: {
        type: 'full',
        maxGasSponsored: 0.01 // in ETH
      },
      recurringUser: {
        type: 'partial',
        userCoverage: 0.5 // User pays 50%
      },
      merchant: {
        type: 'token',
        token: 'USDT' // Pay gas in USDT
      }
    }
  }
};

export function getConfig() {
  return createConfig({
    chains: [baseSepolia, neroChain], // Add NERO Chain
    connectors: [
      coinbaseWallet({ 
        appName: "Baselink", 
        preference: "smartWalletOnly" 
      }),
      // Add NERO Smart Wallet connector
      neroSmartWallet({
        projectId: process.env.NEXT_PUBLIC_NERO_PROJECT_ID!,
        paymaster: neroPaymasterConfig,
        chain: neroChain,
        metadata: {
          name: "Baselink",
          description: "Simple payment links for Web3",
          url: "https://baselnk.vercel.app/",
          icons: ["https://baselnk.vercel.app/logo.png"]
        }
      })
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [baseSepolia.id]: http(),
      [neroChain.id]: http(process.env.NEXT_PUBLIC_NERO_RPC_URL!) // Add NERO RPC
    },
  });
}

declare module "wagmi" {
  interface Register {
    config: ReturnType<typeof getConfig>;
  }
}