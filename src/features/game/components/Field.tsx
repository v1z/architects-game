import React from 'react'
import { Cell } from './Cell'
import { generateArrayOfArrays } from './utils'

import s from '../styles.css'

type FielProps = {
  cards: Map<number, number> | undefined
  size: number
  revealedCards: number[]
  lastClicked: number | undefined
  onClick: (id: number, nft: number) => void
}

export const Field = (props: FielProps) => {
  const { cards, size, revealedCards, onClick } = props

  if (!cards) {
    return null
  }

  const field = generateArrayOfArrays(size)

  return (
    <div
      className={s.field}
      style={{
        width: `calc(${size} * 100px + ${size} * 8px)`,
      }}
    >
      {field.map((col) =>
        col.map((cellID) => (
          <Cell
            id={cellID}
            key={cellID}
            nft={cards.get(cellID)}
            isOpened={revealedCards.includes(cellID)}
            revealedCards={revealedCards}
            onClick={onClick}
          />
        ))
      )}
    </div>
  )
}
