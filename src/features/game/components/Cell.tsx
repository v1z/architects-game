import React from 'react'
import cn from 'classnames'

import { Button } from '../../../shared/components/Button'

import s from '../styles.css'

type CellProps = {
  id: number
  isOpened: boolean
  nft: number
  onClick: (id: number, nft: number) => void
}

export const Cell = (props: CellProps) => {
  const { id, nft, onClick, isOpened } = props

  const handleClick = (id: number, nft: number) => {
    onClick && onClick(id, nft)
  }

  return (
    <Button
      className={cn(s.cell, {
        [s.cell_opened]: isOpened,
      })}
      onClick={() => handleClick(id, nft)}
    >
      <div
        className={cn(s.cellCover, {
          [s.cellCover_hidden]: isOpened,
        })}
      >
        <span className={s.cellText}>$CULT</span>
      </div>

      <img src={`./nfts/${nft}_00000.png`} alt="" />
    </Button>
  )
}
