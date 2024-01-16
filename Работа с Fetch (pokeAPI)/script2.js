fetch(`https://pokeapi.co/api/v2/pokemon/12`)
.then(response => response.json())
.then(data => poke(data))


let wrapper = document.querySelector('.example')

function poke(elem){
    console.log(elem)
    wrapper.src = elem.sprites.back_default

}
