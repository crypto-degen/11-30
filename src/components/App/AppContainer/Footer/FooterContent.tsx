import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import { OutLink } from '../../../Links'
import { useAppContext } from '../../../../context/app'

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: 'row',
    maxWidth: '500px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  item: {
    padding: theme.spacing(2, 1),
    flexGrow: 1,
  },
}))

export const FooterContent: React.FC = () => {
  const cl = useStyles()
  const { token: { links } } = useAppContext()

  return (
    <Grid container className={cl.root}>
      <Grid item className={cl.item}>
        <OutLink href={links.social.telegram} text="Telegram" />
      </Grid>
      <Grid item className={cl.item}>
        <OutLink href={links.uniswap.buy} text="Uniswap" />
      </Grid>
      <Grid item className={cl.item}>
        <OutLink href={links.contract} text="Contract" />
      </Grid>
      <Grid item className={cl.item}>
        <OutLink href={links.dextools} text="Dextools" />
      </Grid>
      <Grid item className={cl.item}>
        <OutLink href={links.uniswap.liquidity} text="Liquidity" />
      </Grid>
    </Grid>
  )
}