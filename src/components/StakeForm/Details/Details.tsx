import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  AccordionDetails,
} from '@material-ui/core'

import { StakeForm } from './StakeForm'

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}))

export const Details: React.FC = () => {
  const cl = useStyles()
  
  return (
    <AccordionDetails className={cl.root}>
      <Grid container justify="center" spacing={2}>
        <StakeForm variant="deposit" />
        <StakeForm variant="withdrawal" />
      </Grid>
    </AccordionDetails>
  )
}

