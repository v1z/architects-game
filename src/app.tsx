import React from 'react'
import { createRoot } from 'react-dom/client'

import { MainPage } from './pages/MainPage/MainPage'

import './styles/default.css'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(<MainPage />)
