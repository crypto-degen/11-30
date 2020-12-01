import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  InputAdornment,
  Button,
  Grid,
  TextField,
  ButtonGroup,
} from '@material-ui/core'

import { useAppContext } from '../../../context/app'

const useStyles = makeStyles(theme => ({
  root: {

  },

  button: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontWeight: 700,
  },

}))

interface Props {
  variant: 'deposit' | 'withdrawal'
}

const variantData = {
  deposit: {
    label: 'Deposit Amount',
    buttonText: 'STAKE',
  },

  withdrawal: {
    label: 'Withrawal Amount',
    buttonText: 'UNSTAKE & CLAIM',
  },
}

export const StakeForm: React.FC<Props> = ({
  variant,
}) => {
  const cl = useStyles()
  const { token } = useAppContext()
  const data = variantData[variant]
  return (
    <Grid container item xs={12} md={6} spacing={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label={data.label}
          type="number"
          placeholder="0.000"
          InputProps={{
            endAdornment: <InputAdornment position="end">{token.symbol}</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} container direction="row" justify="center" alignItems="center">
        <ButtonGroup color="primary">
          <Button>25%</Button>
          <Button>50%</Button>
          <Button>75%</Button>
          <Button>100%</Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={12}>
        <Button className={cl.button} fullWidth size="large" variant="contained" disableElevation color="primary">{data.buttonText}</Button>
      </Grid>
    </Grid>
  )
}