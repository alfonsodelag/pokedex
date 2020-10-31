import React, { useState } from 'react';

const CaughtPokemon = (props) => {
    const [caught, setCaught] = useState([]);
    const [num, setNum] = useState("001");

    const catchPokemon = () => {
        setCaught([...caught, 'newpoke']);
    }

    const generateRandomId = () => {
        const randomNum = Math.round(Math.random() * 100);
        if (randomNum < 10) {
            setNum(`00${randomNum}`);
        } else if (randomNum >= 10) {
            setNum(`0${randomNum}`);
        }
    }

    const caughtPokemonList = caught.map((pokemon, key) => <li key={key}>{pokemon}</li>)

    return (
        <div>
            <p>Caught {caught.length} Pokemon on  {props.date}</p>
            <button onClick={catchPokemon}>Catch Pokémon!</button>
            <ul>
                {caughtPokemonList}
            </ul>
            <button onClick={generateRandomId}>Generate a Random Pokemon!</button>
            <p>Random number is {num}</p>
            <img alt="pokemon-image2" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`} />
        </div>
    )
}

export default CaughtPokemon;
