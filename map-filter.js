const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for( let i = 0; i< numbers.length; i++){
//     const element  = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// function square(){
//     return element * element;
// }

// const square = element => element*element;
// const square = x => x * x;

// const result = numbers.map(function(element){
//  return element * element;
// })

// const result = numbers.map(x => x * x);
// console.log(result);

// used filter for select something using condition. output: 6,7,8

// const bigger = numbers.filter(x => x > 5);
// console.log(bigger);


// for each and reduce (please search google and learn)

//Find and filter almost same. immediate output dibe find . jemon niche output dekhabe 6 because prothomei 5 er cheye boro 6 paise
const bigger = numbers.find(x => x > 5);
 console.log(bigger);


 //MAP: array er modde looping kore protita element gula niye kisu ekta kore. kora shes hole protita element niye jeita pabe sheitake result hisebe arekta array diye dibe .
 // so map, filter array dibe but find ony ekta element dibe.