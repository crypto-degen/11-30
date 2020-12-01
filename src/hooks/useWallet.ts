import {
  useWallet as useWalletLib,
  Connectors,
} from 'use-wallet'
import { provider } from 'web3-core'

/*
 * useWallet is missing some typings, so I add them here
 * while also adding some additional functionality
 */
export const useWallet = () => {
  const wallet = useWalletLib()
  
  return {
    ...wallet,
    ethereum: wallet.ethereum as provider,

    isConnected: wallet.status === 'connected',
  }
}

export type Wallet = ReturnType<typeof useWallet>
export type WalletConnector = keyof Connectors
export type Provider = provider
