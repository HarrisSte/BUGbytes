import { useState } from 'react';
import { BsSearchHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let slug = searchTerm.split(' ').join('-').toLowerCase();

    fetch(
      `https://rawg.io/api/games?key=bf22dc51e531456db8bc42a19dac9897&search=${slug}`
    )
      .then((resp) => resp.json())
      .then((apiResponse) => {
        apiResponse === undefined
          ? alert('no games found')
          : navigate('/results', { state: { results: apiResponse.results } });
      });

    setSearchTerm('');
  };

  return (
    <div className='search'>
      <form onSubmit={onSubmit}>
        <BsSearchHeart size={30} color='white' />
        <input
          className='search-bar'
          type='text'
          placeholder='Search for games!'
          value={searchTerm}
          onChange={handleChange}
        />
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Search;
