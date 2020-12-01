import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
} from '@material-ui/core'
import { useAppContext } from '../../context/app'

const useStyles = makeStyles(theme => ({
  root: {

  },
}))

export const Logo: React.FC = () => {
  const cl = useStyles()
  const { token } = useAppContext()
  return (
    <Typography variant="h1" className={cl.root}>{token.name}</Typography>
  )
}