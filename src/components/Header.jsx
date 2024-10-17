import PropTypes from 'prop-types'

export function Header({ score, highScore }) {
  return (
    <header>
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </header>
  )
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
}
