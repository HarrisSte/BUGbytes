import { useState, useEffect } from 'react';

// Get all games
export const GetGames = () => {
  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=bf22dc51e531456db8bc42a19dac9897')
      .then((response) => response.json())
      .then((data) => setTotalReactPackages(data.total));
  }, []);
};

// Get details of game
export const GetGameDetails = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.rawg.io/api/games/{id}?key=bf22dc51e531456db8bc42a19dac9897'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
};

// Get screenshots for game
export const GetGameScreenshots = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.rawg.io/api/games/{game_pk}/screenshots?key=bf22dc51e531456db8bc42a19dac9897'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
};

export const saveGame = (gameData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(gameData),
  });
};


export const deleteGame = (gameId, token) => {
  return fetch(`/api/users/games/${gameId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// Get links to stores that sell the game
// export const GetGameStores = () => {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     fetch(
//       'https://api.rawg.io/api/games/{game_pk}/stores?key=bf22dc51e531456db8bc42a19dac9897'
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setGames(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);
// };

// // List of achievements/trophies
// export const GetGameAchievements = () => {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     fetch(
//       'https://api.rawg.io/api/games/{id}/achievements?key=bf22dc51e531456db8bc42a19dac98977'
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setGames(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);
// };

// // List of game trailers
// export const GetGameTrailers = () => {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     fetch(
//       'https://api.rawg.io/api/games/{id}/movies?key=bf22dc51e531456db8bc42a19dac9897'
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setGames(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);
// };

// List of genres
export const GetGameGenres = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/genres?key=bf22dc51e531456db8bc42a19dac9897')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
};

// List of platforms
export const GetGamePlatforms = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.rawg.io/api/platforms?key=bf22dc51e531456db8bc42a19dac9897'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
};
