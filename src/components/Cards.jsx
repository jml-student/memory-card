import PropTypes from 'prop-types'
import { useEffect } from 'react'

export function Cards({ setScore, setHighScore }) {
  const pokemonIds = [3, 6, 9, 12, 15, 18, 22, 24, 26, 28, 30, 38]
  const imgs = []
  const names = []

  for (let i = 0; i < pokemonIds.length; i++) {
    const id = pokemonIds[i]
    imgs.push(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    )
  }

  useEffect(() => {
    for (let i = 0; i < pokemonIds.length; i++) {
      const id = pokemonIds[i]
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => {
          names.push(data.name)
        })
    }
  })

  return (
    <div className='grid'>
      {imgs.map((img, index) => (
        <div key={index} className='card'>
          <img src={img} alt={names.index} />
          <h2 className='pokemon-name'>{names.index}</h2>
        </div>
      ))}
    </div>
  )
}

Cards.propTypes = {
  setScore: PropTypes.func.isRequired,
  setHighScore: PropTypes.func.isRequired,
}
