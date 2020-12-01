import React from 'react'

import { createContextWithDefault } from '../../util'
import { StakeFormContextType } from './types'


const [StakeFormContext, useStakeFormContext] = createContextWithDefault<StakeFormContextType>()

interface ProviderProps {
  value: StakeFormContextType,
}

const FarmContextProvider: React.FC<ProviderProps> = ({
  value,
  children,
}) => {

  return (
    <StakeFormContext.Provider value={value} >
      { children }
    </StakeFormContext.Provider>
  )
}

export { FarmContextProvider, useStakeFormContext }