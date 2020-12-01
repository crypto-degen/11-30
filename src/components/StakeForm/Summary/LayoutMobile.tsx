import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Divider,
} from '@material-ui/core'

import { Logo } from './Logo'

import { useStakeFormContext } from '../context'
import { FormatUtil } from '../../../util/format'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

  logoRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '100%',
    textAlign: 'left',
  },

  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
  },

  txtL: { textAlign: 'left' },
  txtR: { textAlign: 'right' },

  subheader: {
    color: theme.palette.grey[600],
    fontWeight: 500,
  },
}))

export const LayoutMobile: React.FC = () => {
  const { disabled, APY, totalValueLocked, depositedAmount } = useStakeFormContext()
  const cl = useStyles({ disabled })

  return (
    <div className={cl.root}>
      <div className={cl.logoRow}>
        <Logo />
      </div>
      <Divider className={cl.divider} orientation="horizontal" variant="middle" />
      <div className={cl.row}>
        <Typography variant="body2" className={cl.subheader}>(Unstable) APY</Typography>
        <Typography variant="h5">{APY}%</Typography>
      </div>
      <div className={clsx(cl.row, cl.txtR)}>
        <Typography variant="body2" className={cl.subheader}>Total Value Locked</Typography>
        <Typography variant="h5">{FormatUtil.toUSD(totalValueLocked)}</Typography>
      </div>
      <div className={clsx(cl.row, cl.txtR)}>
        <Typography variant="body2" className={cl.subheader}>Deposited</Typography>
        <Typography variant="h5">{FormatUtil.toUSD(depositedAmount)}</Typography>
      </div>
    </div>
  )
}
