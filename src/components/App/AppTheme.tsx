import React from 'react'
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'

import * as colors from '@material-ui/core/colors'

const appTheme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: colors.amber,
  }
})

export const AppThemeProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={appTheme}>
    {children}
  </ThemeProvider>
)