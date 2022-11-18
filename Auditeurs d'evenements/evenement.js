//Evenement d'entré de changement

const input = document.querySelector('input')
const p = document.querySelector('p')

input.addEventListener('blur', (e) => {
    p.textContent = 'Field is required'
    p.style.color = 'red'
})

document.body.addEventListener('keypress', e => {
    alert(e.keyCode)
})