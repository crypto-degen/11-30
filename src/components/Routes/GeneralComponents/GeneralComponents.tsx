import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import {
  Grid,
  Typography,
  Divider,
  makeStyles,
} from '@material-ui/core'

import { RouteDatum } from '../types'

import { JustifiedListCard } from '../../Cards'
import { Section } from '../../Containers'

const useStyles = makeStyles(theme => ({
  root: {

  },
}))

const JUSTIFIED_LIST_PROPS = {
  title: 'Justified List Example',
  items: [
    {
      left: <Typography variant="body1"><strong>Metric 1:</strong></Typography>,
      right: <Typography variant="body1">12345</Typography>,
    },
    {
      left: <Typography variant="body1"><strong>Metric 2:</strong></Typography>,
      right: <Typography variant="body1">54321</Typography>,
    },
    {
      left: <Typography variant="body1"><strong>Metric 3:</strong></Typography>,
      right: <Typography variant="body1">asdf asdf</Typography>,
    },
  ]
}

const GeneralComponents: React.FC = () => {
  const cl = useStyles()

  return (
    <Section containerCl={cl.root} containerSize="lg">
      <Grid item xs={12}>
        <Typography variant="h4">Justified List Card</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider variant="middle" />
      </Grid>
      <Grid item xs={12} md={4}>
        <JustifiedListCard {...JUSTIFIED_LIST_PROPS} />
      </Grid>
      <Grid item xs={12} md={4}>
        <JustifiedListCard {...JUSTIFIED_LIST_PROPS} />
      </Grid>
      <Grid item xs={12} md={4}>
        <JustifiedListCard {...JUSTIFIED_LIST_PROPS} />
      </Grid>
    </Section>
  )
}

export const GeneralComponentsRouteDatum: RouteDatum = {
  path: '/general-components',
  navName: 'General Components',
  component: GeneralComponents,
  icon: HomeIcon,
}