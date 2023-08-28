import { useState, useEffect } from 'react';

// Get all games
'https://api.rawg.io/api/games?key=bf22dc51e531456db8bc42a19dac9897'

// Get details of game
'https://api.rawg.io/api/games/{id}?key=bf22dc51e531456db8bc42a19dac9897'

// Get screenshots for game
'https://api.rawg.io/api/games/{game_pk}/screenshots?key=bf22dc51e531456db8bc42a19dac9897'

// Get links to stores that sell the game
'https://api.rawg.io/api/games/{game_pk}/stores?key=bf22dc51e531456db8bc42a19dac9897'

// List of achievements/trophies
'https://api.rawg.io/api/games/{id}/achievements?key=bf22dc51e531456db8bc42a19dac98977'

// List of game trailers
'https://api.rawg.io/api/games/{id}/movies?key=bf22dc51e531456db8bc42a19dac9897'

// List of genres
'https://api.rawg.io/api/genres?key=bf22dc51e531456db8bc42a19dac9897'

// List of platforms
'https://api.rawg.io/api/platforms?key=bf22dc51e531456db8bc42a19dac9897'