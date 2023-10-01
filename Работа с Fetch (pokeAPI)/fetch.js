let arr = [];
let amountCard = 26;
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
for (let i = 1; i < amountCard+1; i++) {
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
let arrForDelete =[]
function fetchRandom() {
    for (let i = 0; i < currentAmount ; i++) {
        let id = arr[i]
        getPokemons(id);
        // deleteUsed(id)
        arrForDelete.push(id)
        // getPokemons(arrForDelete[i])
    }
}
console.log(arr)
let flag = false;
if(!flag) {
    fetchRandom();
    lala()
    flag = true;
}

function lala(){
   for( let i = 0; i < arrForDelete.length; i++){
       let res = arr.findIndex(item=>item == arrForDelete[i])
        arr.splice(res,1)
   }
}
console.log(arr)
function fetchRandom2() {
    for (let i = 0; i < currentAmount ; i++) {
        let id = arr[i]
        console.log(id)
        getPokemons(id);
        // arrForDelete.push(id)
    }
}

function deleteUsed(usedNumber){
    let res = arr.findIndex(item=> item == usedNumber)
        arr.splice(res, 1)
}

let mainTag = document.querySelector('main');
function fillCards(cardsData) {
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

document.querySelector('#reload').onclick = () => location.reload()

more.addEventListener('click', function () {
    lala()
    fetchRandom2()
    console.log(arr)
        if(arr.length === 0){
            alert('Покемоны закончились!')
        }
})



// function contains(where, what) {
//
//     for (let i = 0; i < what.length; i++) {
//         for (let j = 0; j < where.length; j++) {
//             if (what[i] == where[i]) {
// let res = where.find(item=> item == what[i])
//                 console.log(res)
//             }
//         }
//     }
//     return 'est';
// }
//
// console.log(contains(arr,arrForDelete))