import React, { useState } from 'react'

function CaughtPokemon(props) {
    const [caught, setCaught] = useState([]);
    const [num, setRandomNum] = useState(1)

    const catchPokemon = () => {
        setCaught([...caught, 'newpoke'])
    }

    // const randomPokemon = () => {
    //     setRandomPokemon();
    // }

    const generateRandomId = () => {
        let randomNum = "0" + Math.round(Math.random() * 100);
        setRandomNum(randomNum);
    }

    return (
        <div>
            <p>Caught {caught.length} Pokemon on  {props.date}</p>
            <button onClick={catchPokemon}>Catch Pokémon!</button>
            <ul>
                {caught.map((pokemon, key) => <li key={key}>{pokemon}</li>)}
            </ul>
            <button onClick={generateRandomId}>Generate a Random Pokemon!</button>
            <p>Random number is {num}</p>
            <img alt="pokemon-image2" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`} />
        </div>
    )
}

export default CaughtPokemon;
