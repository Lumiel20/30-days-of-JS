//cliquez sur et double click
const buttons = document.querySelector('button')
buttons.addEventListener('click', e => {
    //console.log('event listener objet:', e);
    //console.log('event listener objet: ', e.target);
    console.log('event listener objet: ', e.target.textContent);
})
//const clickMe = () => {
    //alert('attacher aun evenement a un element html')
//}
//valeurs d'entrée
//const height = document.querySelector('#height')
//const mass = document.querySelector('#mass')

//let bmi
//buttons.addEventListener('click', () => {
    //bmi = mass.value / height.value ** 2
    //alert(`votre bmi est ${bmi.toFixed(2)}`)
    //console.log(bmi);
//})

//evenement d'entre et changrment


