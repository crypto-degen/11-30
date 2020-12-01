import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop } from '@material-ui/core'
import {
  SpeedDial,
  SpeedDialAction,
 } from '@material-ui/lab';

import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';

import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { RouteData } from '../../Routes'

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: 0,
  },

  speedDial: {
    position: 'fixed',
    [theme.breakpoints.only('xs')]: {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
    [theme.breakpoints.only('sm')]: {
      top: theme.spacing(3),
      left: theme.spacing(5),
    },
    [theme.breakpoints.only('md')]: {
      top: theme.spacing(4),
      left: theme.spacing(8),
    },
    [theme.breakpoints.up('lg')]: {
      top: theme.spacing(4),
      left: theme.spacing(20),
    },
    
    '& .MuiSpeedDialAction-staticTooltip': {
      
      '& .MuiSpeedDialAction-staticTooltipLabel': {
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: 'rgb(216, 216, 216)',
        },
      }
    },

  },
}))

export const SpeedDialNav = withRouter((props: RouteComponentProps) => {
  const cl = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen)
  const onClickNavItem = (path: string) => {
    if (props.location.pathname !== path) {
      props.history.push(path)
    }
    setIsOpen(false)
  }
  return (
    <>
      <Backdrop open={isOpen} onClick={() => setIsOpen(false)} className={cl.backdrop} />
      <SpeedDial
        ariaLabel="SpeedDial example"
        className={cl.speedDial}
        icon={<SpeedDialIcon icon={<MenuIcon />} openIcon={<MenuOpenIcon />} />}
        open={isOpen}
        onClick={toggleIsOpen}
        direction="down"
      >
        {RouteData.map(route => (
          <SpeedDialAction
            key={route.navName}
            icon={<route.icon />}
            tooltipTitle={route.navName}
            tooltipOpen
            tooltipPlacement="right"
            onClick={() => onClickNavItem(route.path)}
          />
        ))}
      </SpeedDial>
    </>
  );
})