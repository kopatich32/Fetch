fetch(`https://pokeapi.co/api/v2/pokemon/12`)
.then(response => response.json())
.then(data => poke(data))


let wrapper = document.querySelector('.example')

function poke(elem){
    console.log(elem)
    // wrapper.src = elem.sprites.back_default
    wrapper.innerText = elem.order
    let card = `<div style="border: 1px solid black" class="wrapper">
    <h1>${elem.name}</h1>
    <img style="width: 100px"; height="100px" src="${elem.sprites.back_default}">
    <p>${elem.id}</p>
</div>`
    document.body.insertAdjacentHTML('afterbegin',card)
}


console.log(document.body)