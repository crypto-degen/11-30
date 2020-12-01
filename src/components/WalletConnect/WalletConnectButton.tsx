import React from 'react'
import clsx from 'clsx'
import {
  Button,
  ButtonProps,
  makeStyles,
} from '@material-ui/core'

import { useWallet } from '../../hooks/useWallet'
import { useAppContext } from '../../context/app'

const useStyles = makeStyles(theme => ({
  btn: {
    fontFamily: 'Arial',
    textTransform: 'none',
    fontWeight: 700,
    borderRadius: '12px',
    padding: theme.spacing(0, 2),
  },
}))

export const WalletConnectButton: React.FC<ButtonProps> = ({
  className,
  children,
}) => {
  const cl = useStyles()
  const { isConnected, account } = useWallet()
  const { dispatchAppAction } = useAppContext()
  const abbreviatedAddress = `${account?.substr(0, 6)}...${account?.substr(-5, 5)}`
  return (
    <Button
      className={clsx(className, cl.btn)}
      variant="contained"
      color="primary"
      disableElevation
      onClick={() => dispatchAppAction({ tag: 'WalletModal.Open'})}
      disableRipple
    >
      {isConnected ? abbreviatedAddress : (children || 'Unlock Wallet')}
    </Button>
  )
}
