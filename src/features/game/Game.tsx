import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import { Field } from './components/Field'
import { Result } from './components/Result'
import { gameSetup } from './utils/gameSetup'
import { getTime, getFormattedTime } from './utils/spentTime'

import { Button } from '../../shared/components/Button'

import s from './styles.css'

type CardsMapType = Map<number, number>

type GameProps = {
  fieldSize: number
  onReset: () => void
}

const SUPPORTED_NFT_NUMBERS: number[] = [
  203, 217, 279, 284, 322, 343, 345, 396, 428, 444, 457, 469, 495, 525, 526, 562, 573, 621, 624, 627, 654, 672, 683,
  705, 714, 716, 717, 727, 728, 730, 740, 749, 763, 783, 802, 817, 819, 830, 834, 836, 851, 856, 869, 875,
]

export const Game = (props: GameProps) => {
  const [cardsMap, setCardsMap] = useState<CardsMapType | undefined>(undefined)
  const [lastClickedCard, setLastClickedCard] = useState<number | undefined>(undefined)
  const [lastClickedNFT, setLastClickedNFT] = useState<number | undefined>(undefined)
  const [revealedCards, setRevealedCards] = useState(new Set(undefined))
  const [completedCards, setCompletedCards] = useState<number[]>([])
  const [clicksSpent, setClicksSpent] = useState<number>(0)
  const [isResultOpened, setResultOpened] = useState(true)
  const [spentSeconds, setSpentSeconds] = useState(0)
  const [isUnmounting, setUnmounting] = useState(false)

  const { fieldSize, onReset } = props

  useEffect(() => {
    const cards = gameSetup(SUPPORTED_NFT_NUMBERS, fieldSize * fieldSize)

    setCardsMap(cards)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setSpentSeconds((prevSeconds) => prevSeconds + 1), 1000)

    if (completedCards.length === fieldSize * fieldSize) {
      clearInterval(timer)
    }

    return () => clearInterval(timer)
  }, [completedCards])

  const incrementClicks = () => {
    setClicksSpent(clicksSpent + 1)
  }

  const handleResetClick = () => {
    setUnmounting(true)

    // keep ms in touch with css delay
    setTimeout(() => onReset(), 600)
  }

  const toggleResultClose = () => {
    setResultOpened(!isResultOpened)
  }

  const handleCardClick = (id: number, nft: number) => {
    incrementClicks()

    // 1 opened and new click with match - save both as completed and reset
    if (lastClickedCard !== undefined && lastClickedNFT === nft) {
      setCompletedCards([...completedCards, lastClickedCard, id])
      setLastClickedCard(undefined)
      setLastClickedNFT(undefined)
      setRevealedCards(new Set())

      return
    }

    // 2 different opened and new click
    if (revealedCards.size === 2) {
      setRevealedCards(new Set([id]))
    } else {
      setRevealedCards(new Set([...revealedCards, id]))
    }

    setLastClickedCard(id)
    setLastClickedNFT(nft)
  }

  const spentTime = getTime(spentSeconds)
  const formattedTime = getFormattedTime(spentTime)
  const spentText = `${formattedTime.minutes}:${formattedTime.seconds}`

  const unfinishedCards = fieldSize * fieldSize - completedCards.length

  return (
    <div
      className={cn(s.game, {
        [s.game_unmount]: isUnmounting,
      })}
    >
      <div className={s.stats}>
        <span className={s.statItem}>
          Time spent: <span className={s.statValue}>{spentText}</span>
        </span>

        <span className={s.statItem}>
          Clicks spent: <span className={s.statValue}>{clicksSpent}</span>
        </span>
      </div>

      <p className={s.gameTitle}>
        Reveal the <span className={s.highlight}>Architect</span>, then try to&nbsp;find the same one, before the{' '}
        <span className={s.highlight}>cult</span> has come for you&hellip;
      </p>

      <Field
        cards={cardsMap}
        size={fieldSize}
        revealedCards={[...Array.from(revealedCards), ...completedCards]}
        lastClicked={lastClickedCard}
        onClick={handleCardClick}
      />

      <div className={s.buttons}>
        <Button className={s.reset} onClick={handleResetClick}>
          RESTART
        </Button>

        {unfinishedCards === 0 && (
          <Button className={s.resultBtn} onClick={toggleResultClose}>
            RESULT
          </Button>
        )}
      </div>

      {unfinishedCards === 0 && isResultOpened && (
        <Result fieldSize={fieldSize} clicksSpent={clicksSpent} spentTime={spentTime} onReset={toggleResultClose} />
      )}
    </div>
  )
}
