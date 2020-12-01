import React from 'react'
import {
  Modal,
  Grid,
  Card,
  Button,
  makeStyles,
} from '@material-ui/core'

import { useWallet } from '../../../hooks/useWallet'
import { useAppContext } from '../../../context/app'

import { WalletConnectorButton } from './WalletConnectorButton'

const useStyles = makeStyles(theme => ({
  modal: {
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  card: {
    outline: 0,
    borderRadius: '20px',
    flexBasis: '66%',
    maxWidth: '750px',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '90%',
    },
    padding: theme.spacing(2),
  },

  btn: {
    fontFamily: 'Arial',
    backgroundColor: 'rgba(255, 255, 255, 0.075)',
    textDecoration: 'none',
    textTransform: 'none',
    padding: theme.spacing(2, 2),
    fontWeight: 700,
    borderRadius: '12px',

    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
    }
  },
}))

export const WalletModal: React.FC = () => {
  const wallet = useWallet()
  const { walletModalIsOpen, dispatchAppAction } = useAppContext()
  const closeModal = () => dispatchAppAction({ tag: 'WalletModal.Close' })
  const cl = useStyles()

  return (
    <Modal
      className={cl.modal}
      open={walletModalIsOpen}
      onClose={closeModal}
    >
      <Card className={cl.card}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} md={6}>
            <WalletConnectorButton connector="injected" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <WalletConnectorButton connector="walletconnect" fullWidth />
          </Grid>
          <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
            <Button
              onClick={() => {
                wallet.reset()
                closeModal()
              }}
            >
              Disconnect
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Modal>
  )
}
