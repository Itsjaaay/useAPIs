const pokemonInput = document.getElementById("pokemonInput");
const getPokemonBtn = document.getElementById("getPokemonBtn");
const pokemonDataContainer = document.getElementById("pokemonData");

getPokemonBtn.addEventListener("click", getPokemonInfo);

function getPokemonInfo() {
    const pokemonNameOrId = pokemonInput.value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

    // Fetch Pokemon data from the PokeAPI
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Update the Pokemon data container with fetched data
            const pokemonName = data.name;
            const pokemonId = data.id;
            const pokemonTypes = data.types.map(type => type.type.name).join(", ");
            const pokemonAbilities = data.abilities.map(ability => ability.ability.name).join(", ");

            pokemonDataContainer.innerHTML = `<p>Name: ${pokemonName}</p>
                                              <p>ID: ${pokemonId}</p>
                                              <p>Types: ${pokemonTypes}</p>
                                              <p>Abilities: ${pokemonAbilities}</p>`;
        })
        .catch(error => {
            console.error("Error fetching Pokemon data: ", error);
            pokemonDataContainer.innerHTML = "Pokemon not found. Please enter a valid name or ID.";
        });
}
