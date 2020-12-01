import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
} from '@material-ui/core'

import { useAppContext } from '../../../context/app'
import DisabledLogoSrc from '../img/disabled_logo.png'
import { useStakeFormContext } from '../context'

const useStyles = makeStyles(theme => ({
  logo: {
    width: 48,
    marginRight: theme.spacing(3),
  },

  subheader: {
    color: theme.palette.grey[600],
    fontWeight: 500,
  },
}))

export const Logo: React.FC = () => {
  const cl = useStyles()
  const { token } = useAppContext()
  const { disabled } = useStakeFormContext()
  const src = disabled ? DisabledLogoSrc : token.logo

  return (
    <>
      <img src={src} alt={token.symbol} className={cl.logo} />
      <div>
        <Typography variant="h5">{token.symbol}</Typography>
        <Typography variant="body2" className={cl.subheader}>{token.name}</Typography>
      </div>
    </>
  )
}