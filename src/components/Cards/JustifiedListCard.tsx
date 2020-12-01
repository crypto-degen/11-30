import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Box,
} from '@material-ui/core'

import { JustifiedList, JustifiedListItems } from '../Data/JustifiedList'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // padding: theme.spacing(2, 3),
    color: theme.palette.text.primary,
    border: '2px solid',
    // borderRadius: '15px',
    borderColor: theme.palette.primary.main,
  },
  
  title: {
    marginBottom: theme.spacing(3),
  },

}))

interface Props {
  title: string
  items: JustifiedListItems
}

export const JustifiedListCard: React.FC<Props> = ({
  title,
  items,
}) => {
  const cl = useStyles()

  return (
    <Box  px={3} py={2} className={cl.root}>
      <Typography variant="h6" className={cl.title}>
        {title}
      </Typography>
      <JustifiedList items={items} />
    </Box>
  )
}