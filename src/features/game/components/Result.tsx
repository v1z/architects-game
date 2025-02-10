import React from 'react'

import { Button } from '../../../shared/components/Button'

import type { SpentTimeType } from '../utils/spentTime'

import s from '../styles.css'

type ResultProps = {
  fieldSize: number
  clicksSpent: number
  spentTime: SpentTimeType
  onReset: () => void
}

export const Result = (props: ResultProps) => {
  const { fieldSize, clicksSpent, spentTime, onReset } = props

  const { seconds, minutes } = spentTime
  const spentTimeText = `${!!minutes ? `${minutes}m ` : ''}${seconds}s`

  const textToShare = `I just revealed ${fieldSize * fieldSize} Architects from the @Architects_nft collection with ${clicksSpent} clicks in less than ${spentTimeText} — can you beat that record?\n\nJoin the $CULT now and try the "Game of Architects" here https://architects-game.vercel.app/`

  const handleShare = () => {
    const tweetText = encodeURIComponent(textToShare)
    const twitterUrl = `https://x.com/intent/tweet?text=${tweetText}`
    window.open(twitterUrl, '_blank')
  }

  return (
    <section className={s.results}>
      <span className={s.resultTitle}>Congratz!</span>

      <p className={s.resultText}>
        You have revealed <span className={s.highlight}>{fieldSize * fieldSize}&nbsp;Architects</span> with{' '}
        <span className={s.highlight}>{clicksSpent} clicks</span> and less than{' '}
        <span className={s.highlight}>{spentTimeText}</span>
        &nbsp;&mdash; share your success on&nbsp;X
      </p>

      <div className={s.resultBtns}>
        <a href="https://mee6.xyz/i/8v8dJnysQb" target="_blank">
          <Button className={s.btn}>DISCORD</Button>
        </a>

        <Button className={s.btn} onClick={handleShare}>
          SHARE
        </Button>

        <Button className={s.btn} onClick={onReset}>
          CLOSE
        </Button>
      </div>
    </section>
  )
}
