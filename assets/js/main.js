

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

pokeApi.getPokemons().then((pokemons = []) => {

      const newHtml =   pokemons.map(convertPokemonToLi).join('')
      pokemonList.innerHTML = newHtml

    })      //retornando listas com as informações de pokemon

