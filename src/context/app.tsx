import React, { useReducer } from 'react'

import { createContextWithDefault } from '../util'
import { Token } from '../types'

import Logo from '../img/hild_logo.jpg'

interface State {
  walletModalIsOpen: boolean
  token: Token
}

type Action =
  | { tag: 'TokenBalance.Update',  balance: number }
  | { tag: 'TokenTotalSupply.Update',  totalSupply: number }
  | { tag: 'WalletModal.Open' }
  | { tag: 'WalletModal.Close' }

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.tag) {
    case 'TokenBalance.Update':
      return {
        ...state,
        token: {
          ...state.token,
          balance: action.balance,
        }
      }
    case 'WalletModal.Open': {
      return { ...state, walletModalIsOpen: true }
    }
    case 'WalletModal.Close': {
      return { ...state, walletModalIsOpen: false }
    }
    case 'TokenTotalSupply.Update': {
      return { ...state, token: { ...state.token, totalSupply: action.totalSupply } }
    }
  }
}

interface AppContextType extends State {
  dispatchAppAction: React.Dispatch<Action>
}

const [AppContext, useAppContext] = createContextWithDefault<AppContextType>()

const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatchAppAction] = useReducer(reducer, {
    walletModalIsOpen: false,
    token: {
      name: 'Hinterland',
      symbol: 'HILD',
      address: '0x484b09e45d2e388b63b3ae69beeeb767780cb407',
      logo: Logo,

      balance: -1,
      totalSupply: 10000,
      circulatingSupply: 10000,

      links: {
        contract: 'https://etherscan.io/address/0x484b09e45d2e388b63b3ae69beeeb767780cb407',
        unicrypt: '',
        dextools: 'https://www.dextools.io/app/uniswap/pair-explorer/0x203f202a64f3c6dd6e0fc82214f97a52ddfea113',

        uniswap: {
          info: 'https://info.uniswap.org/token/0x484b09e45d2e388b63b3ae69beeeb767780cb407',
          buy: 'https://app.uniswap.org/#/swap?outputCurrency=0x484b09e45d2e388b63b3ae69beeeb767780cb407',
          liquidity: 'https://app.uniswap.org/#/add/0x484b09e45d2e388b63b3ae69beeeb767780cb407/ETH',
        },

        social: {
          telegram: 'https://t.me/HinterlandDAO',
          twitter: '',
          medium: '',
          discord: '',
        },
      },
    },
  })

  const value = {
    ...state,
    dispatchAppAction,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, useAppContext }