import { useState } from 'react'
import { Header } from './Header'
import { Cards } from './Cards'
import { Footer } from './Footer'

export default function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  return (
    <>
      <Header score={score} highScore={highScore} />
      <Cards setScore={setScore} setHighScore={setHighScore} />
      <Footer />
    </>
  )
}
