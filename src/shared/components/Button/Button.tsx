import React, { ReactNode } from 'react'
import cn from 'classnames'

import s from './styles.css'

type ButtonProps = {
  children: ReactNode
  onClick?: any
  className: string
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const { children, onClick, className, disabled = false } = props

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(s.root, className, {
        [s.root_disabled]: !!onClick && disabled,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
