import React from 'react'
import {
  Container,
  makeStyles,
} from '@material-ui/core'

import { Nav } from '../../../Nav'
import { WalletConnectButton } from '../../../WalletConnect'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

export const Header: React.FC = () => {
  const cl = useStyles()
  
  return (
    <Container maxWidth="lg" className={cl.root}>
      <div></div>
      <Nav.Horizontal />
      <WalletConnectButton />
    </Container>
  )
}