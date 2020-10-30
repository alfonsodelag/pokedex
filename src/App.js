import React from 'react';
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";


function App() {
  const something = 45;
  const abilities = ['Anticipation', 'Adaptability', 'Runaway'];
  const date = new Date().toLocaleDateString();

  const logWhenClicked = () => {
    console.log("hello world")
  }

  return (
    <div>
      <Logo appName="Pokedex" logWhenClicked={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <h3>{something}</h3>
    </div>
  );
}

export default App;
