import React from 'react'
import clsx from 'clsx'
import {
  Button,
  ButtonProps,
  makeStyles,
} from '@material-ui/core'

import WalletConnectSrc from '../../../img/wallet-connect.svg'
import MetamaskSrc from '../../../img/metamask.svg'

import { useWallet, WalletConnector } from '../../../hooks/useWallet'
import { useAppContext } from '../../../context/app'

interface WalletConnectIconData {
  src: string
  alt: string
  buttonText: string
}

//@ts-ignore
const ConnectorData: Record<WalletConnector, WalletConnectIconData> = {
  injected: {
    src: MetamaskSrc,
    alt: 'Metamask',
    buttonText: 'Metamask',
  },

  walletconnect: {
    src: WalletConnectSrc,
    alt: 'Wallet Connect',
    buttonText: 'Wallet Connect',
  },
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '1rem',
    padding: theme.spacing(2, 4),
  },

  icon: {
    width: 32,
  },
}))

interface WalletTypeButtonProps extends ButtonProps {
  connector: WalletConnector
}

export const WalletConnectorButton: React.FC<WalletTypeButtonProps> = ({
  className,
  connector,
  ...rest
}) => {
  const { dispatchAppAction } = useAppContext()
  const wallet = useWallet()
  const cl = useStyles()
  
  const data = ConnectorData[connector]
  const Icon = <img src={data.src} alt={data.alt} className={cl.icon} />
  
  return (
    <Button
      className={clsx(className, cl.root)}
      onClick={() => {
        wallet.connect(connector)
        dispatchAppAction({ tag: 'WalletModal.Close' })
      }}
      endIcon={Icon}
      {...rest}
    >
      {data.buttonText}
    </Button>
  )
}