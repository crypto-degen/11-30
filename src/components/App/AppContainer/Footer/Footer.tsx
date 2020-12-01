import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
} from '@material-ui/core'

import { FooterContent } from './FooterContent'

const useStyles = makeStyles(theme => ({
  containerOuter: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },

}))

export const Footer: React.FC = ({
  children,
}) => {
  const cl = useStyles()
  
  return (
    <Container maxWidth="md" className={cl.containerOuter}>
      <FooterContent />
    </Container>
  )
}