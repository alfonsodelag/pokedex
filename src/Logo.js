import React from "react";

const Logo = (props) => {
    const appName = "Pokedex";
    console.log("props from Logo", props);

    return (
        <div>
            <header>
                <h1>Welcome to Pokedex</h1>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
                <h1>{props.appName}</h1>
            </header>
        </div>
    )
}

export default Logo;
