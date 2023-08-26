import React, { useState } from 'react';
import Results from './Results';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    fetch(`https://rawg.io/api/games?key=bf22dc51e531456db8bc42a19dac9897&search=${slug}`)
    .then(resp => resp.json())
    .then(({results}) => {
      results === undefined ? alert('no games found') : setGameResults(results)
    })
    setSearchTerm("")
  }

  return (
    <div className="game-search">
        <form onSubmit={onSubmit}>
          <input type="text" value={searchTerm} onChange={handleChange}/>
          <button type="submit">Submit</button>
        </form>
        <Results gameResults={gameResults} />
    </div>
  );
}

export default Search;