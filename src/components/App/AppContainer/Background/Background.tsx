import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import './Background.css'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
  },
}))

export const Background: React.FC = ({ children }) => {
  const cl = useStyles()
  return (
    <div className={clsx(cl.root, 'bg')}>
      {children}
    </div>
  )
}