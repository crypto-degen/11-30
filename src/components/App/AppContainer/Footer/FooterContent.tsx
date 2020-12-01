import React from 'react'
import { Grid } from '@material-ui/core'

import { OutLink } from '../../../Links'

export const FooterContent: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <OutLink href="#" text="Link 1" />
      </Grid>
      <Grid item xs={3}>
        <OutLink href="#" text="Link 2" />
      </Grid>
      <Grid item xs={3}>
        <OutLink href="#" text="Link 3" />
      </Grid>
      <Grid item xs={3}>
        <OutLink href="#" text="Link 4" />
      </Grid>
    </Grid>
  )
}