import React from 'react';
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";


function App() {
  const something = 45;
  const abilities = ['Anticipation', 'Adaptability', 'Runaway'];
  const date = new Date().toLocaleDateString();

  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <h3>{something}</h3>
    </div>
  );
}

export default App;
