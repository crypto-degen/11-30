import {
  SvgIconTypeMap,
} from "@material-ui/core";

import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export type MuiIconType = OverridableComponent<SvgIconTypeMap<{}, "svg">>

export interface Token {
  name: string
  symbol: string
  address: string
  logo: string

  balance: number
  totalSupply: number
  circulatingSupply: number

  links: {
    contract: string
    unicrypt: string
    dextools: string

    uniswap: {
      info: string
      buy: string
      liquidity: string
    }

    social: {
      telegram: string
      twitter: string
      medium: string
      discord: string
    }
  }
}
