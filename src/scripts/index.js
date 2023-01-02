async function renderizaPokemons() {
    const ulTag = document.querySelector('ul')

    const listaDePokemons = await consomePokeAPI()

    listaDePokemons.results.forEach(pokemon => {
        
        const numeroNaPokedex = pokemon.url.slice(34, -1)

        ulTag.insertAdjacentHTML('beforeend', `
            <li>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <h3>${pokemon.name}</h3>
            </li>
        `)
    })
}

function renderSearch(){

    const searchInput = document.querySelector('.search__input')
    const searchIcon = document.querySelector('.search__icon')
    const mainList = document.querySelector('.main__list')

    searchIcon.addEventListener('click', () => {

        mainList.innerHTML = '' 

        pokemonSearch(searchInput.value.toLowerCase())

    })

}

function renderAll(){

    const pokemonLogo = document.querySelector('.main__logo')
    const mainList = document.querySelector('.main__list')

    pokemonLogo.addEventListener('click', () => {

        mainList.innerHTML = '' 

        renderizaPokemons()

    })

}

renderizaPokemons()

renderSearch()

renderAll()