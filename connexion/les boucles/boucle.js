const numbers = [1, 2, 3, 4, 5]
for (const element of numbers) {
    //console.log(element);
    sum = element * element
    console.log(sum);
}
///////////////////////
let nbre = 0
for (const element of numbers) {
    nbre = nbre + element
    console.log(sum);
}
//////////////////////////////

for (let i = 0; i <= 5; i++) {
    //if (i ==2) {
        continue
    }
    //console.log(i);
//}
///////////////////

//for (let i = 0; i <=100; i++) {
   //if (i % 2 == 0) {
    //break
   //} 
  // console.log(i);
//}

const webTech = ['HTML', 'SCSS', 'JSON', 'PYTHON', 'DART']
//const newArr = []
let nums = [2, 4, 5, 3, 4]
for (const tech of webTech) {
   if (nums.length =+ 1) {
    sumTech = [tech + ' ' + nums]
    //webTech[0] = ['CSS  5']
    console.log(sumTech);
   }
}
