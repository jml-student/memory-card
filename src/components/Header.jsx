export function Header({ score, highScore }) {
  return (
    <header>
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </header>
  )
}

Header.arguments.propTypes = {
  score: Number,
  highScore: Number,
}
