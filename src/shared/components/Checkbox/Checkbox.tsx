import React, { ReactNode } from 'react'
import cn from 'classnames'

import s from './styles.css'

type CheckboxProps = {
  children: ReactNode
  onClick?: any
  className?: string
  disabled?: boolean
  checked?: boolean
}

export const Checkbox = (props: CheckboxProps) => {
  const { children, onClick, className, disabled = false, checked } = props

  return (
    <label className={cn(s.root, className)}>
      <input className={s.control} type="checkbox" onClick={onClick} disabled={disabled} defaultChecked={checked} />

      {children}
    </label>
  )
}
