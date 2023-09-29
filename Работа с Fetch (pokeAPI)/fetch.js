let arr = [];
let amountCard = 20;
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        --currentIndex;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

for (let i = 1; i < amountCard + 1; i++) {
    arr.push(i);
}

shuffle(arr);

async function getPokemons(character) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${character}`);
    let data = await response.json();
    fillCards(data);

}
let currentAmount = 6;
let more = document.querySelector('#more')

function fetchRandom() {
    for (let i = 0; i < currentAmount; i++) {
        let id = arr[i]
        getPokemons(id);
        deleteUsed(id)
    }
}
fetchRandom();

function deleteUsed(usedNumber){
    let res = arr.findIndex(item=> item == usedNumber)
        arr.splice(res, 1)

}

let mainTag = document.querySelector('main');

function fillCards(cardsData) {
    for (let i = 0; i < 1; i++) {
        let card =
            `<div class="wrapper">
<div class="card">
<div class="front">
    <div class="card_img"><img src="${cardsData.sprites.front_default}" alt="pokemon"></div>
    <div class="card_name"> Name: ${cardsData.name}</div>
    <div class="card_email">Character number:${cardsData.id}</div>
    <div class="card_city">Weight: ${cardsData.weight}</div>
</div>
<div class="back">
    <div class="card_img"><img src="${cardsData.sprites.back_default}" alt="pokemon"></div>
</div>
</div>
</div>`;
        mainTag.insertAdjacentHTML('beforeend', card);
    }
}

document.querySelector('#reload').onclick = () => location.reload()

more.addEventListener('click', function () {
    fetchRandom()
        if(arr.length === 0){
            alert('Покемоны закончились!')
        }
})
