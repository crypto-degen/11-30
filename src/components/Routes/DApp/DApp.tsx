import React from 'react'
import {
  Container,
  Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import AccountTreeIcon from '@material-ui/icons/AccountTree';

import { StakeForm } from '../../StakeForm'
import { RouteDatum } from '../types'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(8),
  },
}))


const DApp: React.FC = () => {
  const cl = useStyles()

  return (
    <Container maxWidth="md" className={cl.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} md={10}>
          <StakeForm APY={1000.0} />
        </Grid>
        <Grid item xs={12} md={10}>
          <StakeForm APY={1000.0} />
        </Grid>
        <Grid item xs={12} md={10}>
          <StakeForm disabled />
        </Grid>
      </Grid>
    </Container>
  )
}

export const DAppRouteDatum: RouteDatum = {
  path: '/dApp',
  navName: 'DApp',
  component: DApp,
  icon: AccountTreeIcon,
}

