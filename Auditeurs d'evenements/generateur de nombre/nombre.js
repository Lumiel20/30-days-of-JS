let min = 0
let max = 2
let random
//const random = Math.floor(Math.random() * (max - min)) + min
//console.log(random);

const span = document.getElementById('nbre')

const buttons = document.querySelector('.generete')

buttons.addEventListener('click', () => {
  random = Math.floor(Math.random() * (max - min)) + min
  nbre.innerText = random
  console.log(random);

  if (random % 2 === 0) {
    span.style.color = 'green'
  } else {
    span.style.color = 'red'
  }
})

//const butt = document.querySelector('.code')
const claviercode = document.getElementById('claviercode')

document.body.addEventListener('keypress', e => {
  keypress = e.key
  claviercode.innerHTML = keypress
  console.log(keypress);
})