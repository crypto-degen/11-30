import React from 'react'
import clsx from 'clsx'
import {
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: theme.spacing(4, 0),
  },

  container: {
    padding: theme.spacing(3, 0),
  },
}))

interface SectionProps {
  containerSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  sectionCl?: string
  containerCl?: string
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined
}

export const Section: React.FC<SectionProps> = ({
  children,
  sectionCl,
  containerCl,
  containerSize = 'md',
}) => {
  const cl = useStyles()

  return (
    <section className={clsx(cl.root, sectionCl)}>
      <Container maxWidth={containerSize} className={clsx(cl.container, containerCl)}>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </Container>
    </section>
  )
}
