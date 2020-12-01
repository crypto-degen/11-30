import React from 'react'
import { Route } from 'react-router-dom'

import { RouteDatum } from './types'

import { HomeRouteDatum } from './Home'
import { DAppRouteDatum } from './DApp'
import { GeneralComponentsRouteDatum } from './GeneralComponents'

export const RouteData: RouteDatum[] = [
  HomeRouteDatum,
  DAppRouteDatum,
  GeneralComponentsRouteDatum,
]

export const Routes: React.FC = () => {
  return (
    <>
      {RouteData.map(route => (<Route exact path={route.path} key={route.path} component={route.component} />))}
    </>
  )
}
