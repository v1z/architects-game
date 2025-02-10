import React, { ReactNode } from 'react'

import s from './styles.css'

type LinkProps = {
  href: string
  children: ReactNode
}

export const Link = (props: LinkProps) => {
  const { children, href } = props

  return (
    <a target="_blank" className={s.root} href={href} title={href}>
      {children}
    </a>
  )
}
