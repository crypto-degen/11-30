import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { RouteDatum } from '../types'

import { Logo } from '../../Logo'
import { useAppContext } from '../../../context/app'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(8),
  },
}))

// const LOREM = `
//   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
// `

const Home: React.FC = () => {
  const { token } = useAppContext()
  const cl = useStyles()
  
  return (
    <Container maxWidth="md" className={cl.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="textPrimary">Balance: {token.balance.toLocaleString()}</Typography>
          <Typography variant="body1" color="textPrimary">Total Supply: {token.totalSupply.toLocaleString()}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export const HomeRouteDatum: RouteDatum = {
  path: '/',
  navName: 'Home',
  component: Home,
  icon: HomeIcon,
}