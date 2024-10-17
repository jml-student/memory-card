import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

export function Cards({ score, setScore, highScore, setHighScore }) {
  const pokemonIds = [3, 6, 9, 12, 15, 18, 22, 24, 26, 28, 30, 38]
  const imgs = []
  const [names, setNames] = useState([])
  const [clickedNames, setClickedNames] = useState([])

  for (let i = 0; i < pokemonIds.length; i++) {
    const id = pokemonIds[i]
    imgs.push(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    )
  }

  useEffect(() => {
    const fetchNames = async () => {
      const fetchedNames = []
      for (let i = 0; i < pokemonIds.length; i++) {
        const id = pokemonIds[i]
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        const name = data.name[0].toUpperCase() + data.name.slice(1)
        fetchedNames.push(name)
      }
      setNames(fetchedNames)
    }

    fetchNames()
  }, [])

  const handleCardClick = (name) => {
    if (clickedNames.includes(name)) {
      setScore(0)
      setClickedNames([])
    } else {
      setScore(score + 1)
      if (score >= highScore) {
        setHighScore(score + 1)
      }
      setClickedNames([...clickedNames, name])
    }
  }

  return (
    <div className='grid'>
      {imgs.map((img, index) => (
        <div
          key={names[index]}
          className='card'
          onClick={() => handleCardClick(names[index])}
        >
          <img src={img} alt={names[index]} />
          <h2 className='pokemon-name'>{names[index]}</h2>
        </div>
      ))}
    </div>
  )
}

Cards.propTypes = {
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  highScore: PropTypes.number.isRequired,
  setHighScore: PropTypes.func.isRequired,
}
