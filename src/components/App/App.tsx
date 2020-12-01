import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import { Routes } from '../Routes'

import { UseWalletProvider } from 'use-wallet'
import { AppContextProvider } from '../../context/app'
import { AppThemeProvider } from './AppTheme'

import { AppContainer } from './AppContainer/AppContainer'

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <AppContainer>
          <Switch>
            <Routes />
          </Switch>
        </AppContainer>
      </BrowserRouter>
    </Providers>
  );
}

const Providers: React.FC = ({ children }) => (
  <AppThemeProvider>
    <AppContextProvider>
      <UseWalletProvider
        chainId={1}
        connectors={{
          walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' },
        }}
      >
        {children}
      </UseWalletProvider>
    </AppContextProvider>
  </AppThemeProvider>
)

export default App
