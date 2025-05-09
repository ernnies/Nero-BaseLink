"use client";
import { useChainId } from "wagmi";
import { neroChain } from "@nerochain/sdk";

export default function NeroBenefitsBanner() {
  const chainId = useChainId();
  const isOnNeroChain = chainId === neroChain.id;

  if (!isOnNeroChain) return null;

  return (
    <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-8 text-center">
      <h3 className="font-bold text-lg mb-2">✨ NERO Chain Benefits</h3>
      <ul className="text-sm space-y-1">
        <li>• Gasless transactions with Paymaster</li>
        <li>• Pay fees in USDT instead of ETH</li>
        <li>• Smart wallet security</li>
      </ul>
    </div>
  );
}