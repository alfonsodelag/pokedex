import React from 'react';

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
    </div>
  );
}

const Logo = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Pokedex</h1>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
      </header>
    </div>
  )
}

const BestPokemon = () => {
  return (
    <p>My Favorite Pokemon is Squirtle</p>
  )
}

export default App;
