import { MuiIconType } from '../../types'

export interface RouteDatum {
  path: string
  navName: string
  component: React.FC
  icon: MuiIconType
}