import React from 'react'
import {
  Accordion,
  Divider,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { FarmContextProvider } from './context'

import { Summary } from './Summary'
import { Details } from './Details'
import { useAppContext } from '../../context/app'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    borderColor: theme.palette.primary.light,
    border: '1px solid',
    filter: (p: any) => p.disabled ? 'grayscale(100%)' : 'grayscale(0%)',
  },

  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
  },

}));

interface StakeFormProps {
  disabled?: boolean
  
  totalValueLocked?: number
  depositedAmount?: number
  
  APY?: string | number
}

export const StakeForm: React.FC<StakeFormProps> = ({
  disabled,
  APY = 0,
  totalValueLocked = 0,
  depositedAmount = 0,
}) => {
  const { token } = useAppContext()
  const cl = useStyles({ disabled })
  
  const value = {
    disabled: !!disabled,
    APY: !!disabled ? '????.?' : APY,
    totalValueLocked,
    depositedAmount,
  }

  return (
    <FarmContextProvider value={value}>
      <Accordion elevation={0} square className={cl.root}>
        <Summary />
        <Divider orientation="horizontal" variant="fullWidth" className={cl.divider} />
        <Details />
      </Accordion>
    </FarmContextProvider>
  )
}