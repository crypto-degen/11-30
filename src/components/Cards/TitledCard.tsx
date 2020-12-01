import React from 'react'
import {
  Card,
  Typography,
  Divider,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    borderRadius: '20px',
    border: (p: any) => p.variant === 1 ? `5px solid ${theme.palette.primary.main}` : `5px solid ${theme.palette.secondary.main}`,
    boxShadow: '8px 8px 0 black',
  },
  
  divider: {
    backgroundColor: (p: any) => p.variant === 1 ? theme.palette.primary.main : theme.palette.secondary.main,
    margin: theme.spacing(1, 0),
    height: '3px',
  },
  
  header: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontStyle: 'italic',
    color: (p: any) => p.variant === 1 ? theme.palette.secondary.main : theme.palette.primary.main,
    textShadow: '3px 3px 0 black',
  },
  
  body: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
  }
}))

interface Props {
  title: string
  variant?: number
}

export const TitledCard: React.FC<Props> = ({
  title,
  children,
  variant = 1,
}) => {
  const cl = useStyles({ variant })
  
  return (
    <Card className={cl.root}>
      <Typography variant="h4" className={cl.header}>
        {title}
      </Typography>
      <Divider className={cl.divider} />
      <Typography variant="body1" className={cl.body}>
        {children}
      </Typography>
    </Card>
  )
}