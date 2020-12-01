import React, { useState } from 'react';
import clsx from 'clsx'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  Tabs,
  Tab,
} from '@material-ui/core'

import { RouteData } from '../../Routes'

const useStyles = makeStyles(theme => ({
  root: {

  },
  
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > .indicator-line': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: theme.palette.primary.main
    },
  },

  tab: {
    /* I have no idea why MIN width works here, but MAX width does not */
    minWidth: '100px',
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      fontSize: 11,
      minWidth: '55px',
    },
  },
}))

interface Props extends RouteComponentProps {
  className?: string
}

export const Horizontal = withRouter(({
  history,
  className,
}: Props) => {
  const cl = useStyles()
  const [val, setVal] = useState(0)
  const onChange = (e: React.ChangeEvent<{}>, value: number) => setVal(value)
  return (
    <Tabs
      value={val}
      onChange={onChange}
      className={clsx(cl.root, className)}
      classes={{
        indicator: cl.indicator,
      }}
      indicatorColor="primary"
      centered
      TabIndicatorProps={{ children: <div className="indicator-line" /> }}
    >
      {RouteData.map(route => (
        <Tab
          label={route.navName}
          onClick={() => history.push(route.path)}
          classes={{
            root: cl.tab
          }}
          disableRipple
        />
      ))}
    </Tabs>
  )
})