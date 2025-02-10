import React from 'react'
import cn from 'classnames'

import s from './Container.css'

type Props = {
  className?: string
  role?: string
  children: React.ReactNode
}

export const Container: React.FC<Props> = ({ children, className, role = undefined }) => (
  <div
    className={cn(s.root, className)}
    role={role}
  >
    {children}
  </div>
)
