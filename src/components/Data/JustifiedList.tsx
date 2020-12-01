import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Divider,
  // Typography,
  // Box,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  // title: {
  //   marginBottom: theme.spacing(3),
  // },

  root: {
    width: '100%',
    padding: theme.spacing(2, 3),
    color: theme.palette.text.primary,
    border: '2px solid',
    borderRadius: '15px',
    borderColor: theme.palette.primary.main,
  },

  list: {
    padding: 0,
  },

  listItem: {
    padding: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leftItem: {
  },

  rightItem: {
  },

  divider: {
    margin: theme.spacing(1, 0, 2, 0),
  },
}))

interface JustifiedItem {
  left: JSX.Element
  right: JSX.Element
}

export type JustifiedListItems = JustifiedItem[]

interface Props {
  items: JustifiedListItems
}

export const JustifiedList: React.FC<Props> = ({
  items,
}) => {
  const cl = useStyles()

  return (
    <List className={cl.list}>
      {items.map(({ left, right }) => (
        <>
          <ListItem className={cl.listItem}>
            <div className={cl.leftItem}>{left}</div>
            <div className={cl.rightItem}>{right}</div>
          </ListItem>
          <Divider variant="middle" className={cl.divider} />
        </>
      ))}
    </List>

  )
}