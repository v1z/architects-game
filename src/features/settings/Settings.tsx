import React, { useState } from 'react'

import cn from 'classnames'
import { Link } from '../../shared/components/Link'
import { Button } from '../../shared/components/Button'

import s from './styles.css'

type SettinsProps = {
  onStart: () => void
  onSizeChange: (value: number) => void
  fieldSize: number
}

const MIN_SIZE = 2
const MAX_SIZE = 6

export const Settings = (props: SettinsProps) => {
  const { onStart, onSizeChange, fieldSize } = props

  const [isUnmounting, setUnmounting] = useState(false)

  const handleSizeInc = () => {
    onSizeChange(fieldSize + 2)
  }

  const handleSizeDec = () => {
    onSizeChange(fieldSize - 2)
  }

  const handleStartClick = () => {
    setUnmounting(true)

    // keep ms in touch with css delay
    setTimeout(() => onStart(), 600)
  }

  return (
    <div
      className={cn(s.root, {
        [s.root_unmount]: isUnmounting,
      })}
    >
      <h1 className={s.title}>
        Game of&nbsp;<Link href="https://x.com/Architects_nft">Architects</Link>
      </h1>

      <span className={s.subtitle}>Choose the field size</span>

      <div className={s.controls}>
        <Button
          className={cn(s.button, s.clickable, {
            [s.clickable_disabled]: fieldSize === MIN_SIZE,
          })}
          disabled={fieldSize === MIN_SIZE}
          onClick={handleSizeDec}
        >
          -
        </Button>

        <Button className={cn(s.size, s.clickable)} disabled={true}>
          {fieldSize}x{fieldSize}
        </Button>

        <Button
          className={cn(s.button, s.clickable, {
            [s.clickable_disabled]: fieldSize === MAX_SIZE,
          })}
          disabled={fieldSize === MAX_SIZE}
          onClick={handleSizeInc}
        >
          +
        </Button>
      </div>

      <Button className={cn(s.clickable, s.start)} onClick={handleStartClick}>
        START
      </Button>
    </div>
  )
}
