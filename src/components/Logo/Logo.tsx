import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

import { useAppContext } from '../../context/app'

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'Montserrat',
  },
  
  '@keyframes pulse': {
    '0%': {
      textShadow: `
        6px 6px ${theme.palette.primary.main},
        18px 18px #000000
      `,
    },
    '100%': {
      textShadow: `
        8px 8px ${theme.palette.primary.main},
        22px 22px #000000
      `,
    },
  },

  name: {
    marginBottom: theme.spacing(2),
    fontSize: '130px',
    letterSpacing: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '100px',
      letterSpacing: '0.75rem',
      textAlign: 'center',
      marginLeft: -15,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '68px',
    },
    margin: 0,
    fontStyle: 'italic',
    fontWeight: 900,
    '-webkit-text-fill-color': 'transparent',
    '-webkit-text-stroke-width': '3px',
    '-webkit-text-stroke-color': 'white',
    transform: 'rotate(-3deg)',
    textShadow: `
      7px 7px ${theme.palette.primary.main},
      20px 20px #000000
    `,
    animation: '$pulse 2s ease-in-out infinite alternate',
  },

  '@keyframes wiggle': {
    from: {
      transform: 'rotate(-3deg)'
    },
    to: {
      transform: 'rotate(-1.5deg)',
    },
  },

  subheader: {
    color: 'white',
    transform: 'rotate(-4deg)',
    animation: '$wiggle 1s ease-in-out infinite alternate',
  },
}))

export const Logo: React.FC = () => {
  const cl = useStyles()
  const { token } = useAppContext()

  return (
    <div className={cl.root}>
      <div>
        <h1 className={cl.name}>{token.name}</h1>
        <Typography variant="h4" className={cl.subheader}>
          An Economic Ecosystem
        </Typography>
      </div>
    </div>
  )
}