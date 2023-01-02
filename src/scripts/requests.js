async function consomePokeAPI() {

    const loading = document.querySelector('#loading')

    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

      .then(
        response => response.json()
      )

      .catch(
        error => console.log(error)
      )

    loading.classList.add('hidden')

    return pokemonsDaAPI
}

async function pokemonSearch(pokemonName){

  const mainList = document.querySelector('.main__list')
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  .then(response => response.json())

  .then(pokemon => {

    mainList.insertAdjacentHTML('beforeend', `
            <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt=${pokemon.name}><h3>${pokemon.name}</h3>
            </li>
        `)
  })

  return pokemon

}

consomePokeAPI()