const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#003</span>
            <span class="name">${pokemon.name}</span>
    
            <div class="detail">
                <ol class="types">
                    <li class="type"></li>
                    <li class="type"></li>
                </ol>
    
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
                    alt="${pokemon.name}">
            </div>

        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
    .then((response) => response.json())            //convertendo resposta do body em json
    .then((jsonBody) => jsonBody.results)           //filtrando results da resposta json
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)

            

        }
    })      //retornando listas com as informações de pokemno
    .catch((error) => console.error(error))         //tratamento de erro
