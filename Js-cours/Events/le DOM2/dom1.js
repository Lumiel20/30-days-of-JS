//const p = document.querySelector('p')
//const myClassList = ['error','succes','attention'];

//let index = 0;

//function changeclass() {
    //console.log(index);
    //if (index > myClassList.length-1) {
        //index = 0;
        //p.setAttribute("class", "")
        //p.classList.add(myClassList[index]); 
    //}
    //p.classList.add(myClassList[index]);
    //index++;   
//}
//setInterval(changeclass, 2000);  
//****************************************** */

//const p = document.querySelector('p')
//const myClassList = ['error','succes','attention'];
 
//let index = 0;
//changeClass = () => {
    //if (index > myClassList.length-1) {
        //index = 0;
        //p.setAttribute("class", "")
    //}
    //p.classList.add(myClassList[index]);
    //console.log(index);
    //index++;
//}
//setInterval(changeClass, 2000);
const h1 = document.querySelector('h1')
h1.style.fontSize = '40px';
h1.style.color = 'green';
h1.style.textTransform = 'uppercase'

const list_para = document.querySelectorAll('p')

list_para.forEach( (p) => {
    if (p.innerText.includes('error')) {
        p.classList.add('error')
    }
    if (p.innerText.includes('succes')) {
        p.classList.add('succes')
    }
    if (p.innerText.includes('attention')) {
        p.classList.add('attention')
    }
})



const mav = '';
console.log(!!mav);


