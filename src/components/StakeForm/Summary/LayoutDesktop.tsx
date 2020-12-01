import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Grid,
} from '@material-ui/core'

import { Logo } from './Logo'

import { useStakeFormContext } from '../context'
import { FormatUtil } from '../../../util/format'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    marginRight: '5%',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },

  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '30%',
    textAlign: 'left',
  },

  txtL: { textAlign: 'left' },
  txtR: { textAlign: 'right' },

  subheader: {
    color: theme.palette.grey[600],
    fontWeight: 500,
  },
}))

export const LayoutDesktop: React.FC = () => {
  const { disabled, APY, totalValueLocked, depositedAmount } = useStakeFormContext()
  const cl = useStyles({ disabled })

  return (
    <Grid container direction = "row" wrap = "nowrap" >
      <div className={cl.logoContainer}>
        <Logo />
      </div>
      <div className={cl.root}>
        <div className={cl.txtL}>
          <Typography variant="h5">{APY}%</Typography>
          <Typography variant="body2" className={cl.subheader}>(Unstable) APY</Typography>
        </div>
        <div className={cl.txtR}>
        <Typography variant="h5">{FormatUtil.toUSD(totalValueLocked)}</Typography>
          <Typography variant="body2" className={cl.subheader}>Total Value Locked</Typography>
        </div>
        <div className={cl.txtR}>
        <Typography variant="h5">{FormatUtil.toUSD(depositedAmount)}</Typography>
          <Typography variant="body2" className={cl.subheader}>Deposited</Typography>
        </div>
      </div>
    </Grid >
  )
}