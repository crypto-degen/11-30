import React from 'react'
import Link, { LinkProps } from '@material-ui/core/Link'
import { Typography } from '@material-ui/core'

interface OutLinkProps extends LinkProps {
  text: string
}

export const OutLink: React.FC<OutLinkProps> = ({
  text,
  ...rest
}) => {
  return (
    <Link {...rest} target="_blank" rel="noopener noreferer">
      <Typography variant="body1">{text}</Typography>
    </Link>
  )
}