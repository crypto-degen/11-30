import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AccordionSummary,
  useMediaQuery,
} from '@material-ui/core'

import { Icons } from '../icons'

import { useStakeFormContext } from '../context'

import { LayoutDesktop } from './LayoutDesktop'
import { LayoutMobile } from './LayoutMobile'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 4),
    
    '& .MuiAccordionSummary-expandIcon': {
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: '10%',
        right: '5%',
      }
    }, 
  },

}))

export const Summary: React.FC = () => {
  const cl = useStyles()
  const isMobile = useMediaQuery('(max-width: 960px)')
  const { disabled } = useStakeFormContext()

  return (
    <AccordionSummary
      className={cl.root}
      expandIcon={<Icons.ExpandMore color="primary" fontSize="large" />}
      disabled={disabled}
    >
      {isMobile ? <LayoutMobile /> : <LayoutDesktop />}
    </AccordionSummary>
  )
}