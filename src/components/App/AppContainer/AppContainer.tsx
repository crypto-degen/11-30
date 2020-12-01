import React from 'react'
import { makeStyles } from '@material-ui/core'

import { useWallet } from '../../../hooks/useWallet'
import { useInterval } from '../../../hooks/useInterval'
import { useAppContext } from '../../../context/app'

import { ERC20Util } from '../../../util/erc20'

import { Header } from './Header'
import { Footer } from './Footer'
import { WalletModal } from '../../WalletConnect/Modal'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    background: theme.palette.type === 'dark' ? 'black' : 'white',
  },
}))

export const AppContainer: React.FC = ({ children }) => {
  const cl = useStyles()
  const wallet = useWallet()
  const { dispatchAppAction, token } = useAppContext()

  // poll for token balance
  useInterval(async () => {
    const balance = await ERC20Util.fetchBalance(wallet, token.address)
    dispatchAppAction({ tag: 'TokenBalance.Update', balance })

    const totalSupply = await ERC20Util.fetchTotalSupply(wallet.ethereum, token.address)
    dispatchAppAction({ tag: 'TokenTotalSupply.Update', totalSupply })
  }, 2000)

  return (
    <div className={cl.root}>
      <WalletModal />
      <Header />
      {children}
      <Footer />
    </div>  
  )
}