import React from 'react'
import {
  Card,
  Typography,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    borderRadius: '20px',
    border: `5px solid ${theme.palette.primary.main}`,
    boxShadow: '8px 8px 0 black',
    height: '100%',
  },
  
  header: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontStyle: 'italic',
    color: theme.palette.secondary.main,
    textShadow: '3px 3px 0 black',
    textAlign: 'center',
  },
  
  body: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    textAlign: 'center',
    color: theme.palette.primary.main,
    textShadow: '4px 4px 0 black',
  }
}))

interface Props {
  title: string
}

export const StatCard: React.FC<Props> = ({
  title,
  children,
}) => {
  const cl = useStyles()
  
  return (
    <Card className={cl.root}>
      <Typography variant="h4" className={cl.header}>
        {title}
      </Typography>
      <Typography variant="h2" className={cl.body}>
        {children}
      </Typography>
    </Card>
  )
}