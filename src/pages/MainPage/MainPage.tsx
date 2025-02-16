import React, { useState } from 'react'

import { Container } from '../../shared/components/Container'
import { Link } from '../../shared/components/Link'
import { Game } from '../../features/game/Game'
import { Settings } from '../../features/settings/Settings'

import s from './styles.css'

type GameStageType = 'notStarted' | 'inProgress'

export const MainPage = () => {
  const [gameStage, setGameStage] = useState<GameStageType>('notStarted')
  const [hardMode, setHardMode] = useState<boolean>(false)
  const [fieldSize, setFieldSize] = useState<number>(4)

  const handleGameStart = () => {
    setGameStage('inProgress')
  }

  const handleGameReset = () => {
    setGameStage('notStarted')
  }

  const handleSizeChange = (size: number) => {
    setFieldSize(size)
  }

  const toggleHardMode = () => {
    setHardMode(!hardMode)
  }

  return (
    <>
      <main className={s.main}>
        <Container>
          {gameStage === 'notStarted' && (
            <Settings
              onStart={handleGameStart}
              fieldSize={fieldSize}
              hardMode={hardMode}
              onSizeChange={handleSizeChange}
              onHardModeToggle={toggleHardMode}
            />
          )}

          {gameStage === 'inProgress' && <Game fieldSize={fieldSize} onReset={handleGameReset} hardMode={hardMode} />}
        </Container>
      </main>

      <footer className={s.footer}>
        <span>
          made by <Link href="https://x.com/v1z1337">@v1z</Link>
        </span>
      </footer>
    </>
  )
}
