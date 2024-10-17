import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

export function Cards({ setScore, setHighScore }) {
  const pokemonIds = [3, 6, 9, 12, 15, 18, 22, 24, 26, 28, 30, 38]
  const imgs = []
  const [names, setNames] = useState([])

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
        fetchedNames.push(data.name)
      }
      setNames(fetchedNames)
    }

    fetchNames()
  })

  return (
    <div className='grid'>
      {imgs.map((img, index) => (
        <div key={index} className='card'>
          <img src={img} alt={names[index]} />
          <h2 className='pokemon-name'>{names[index]}</h2>
        </div>
      ))}
    </div>
  )
}

Cards.propTypes = {
  setScore: PropTypes.func.isRequired,
  setHighScore: PropTypes.func.isRequired,
}
