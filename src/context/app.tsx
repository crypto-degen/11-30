import React, { useReducer } from 'react'

import { createContextWithDefault } from '../util'
import { Token } from '../types'

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
      name: 'Token Name',
      symbol: 'TIKR',
      address: '0x26ce25148832c04f3d7f26f32478a9fe55197166',
      logo: '',

      balance: -1,
      totalSupply: 10000,
      circulatingSupply: 10000,

      links: {
        contract: '',
        unicrypt: '',
        dextools: '',

        uniswap: {
          info: '',
          buy: '',
          liquidity: '',
        },

        social: {
          telegram: '',
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