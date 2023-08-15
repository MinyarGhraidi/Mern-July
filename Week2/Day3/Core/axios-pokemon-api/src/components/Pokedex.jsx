import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((response) => {
        const data = response.data;
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error('Error fetching Pokemon:', error);
      });
  }, []); 

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
