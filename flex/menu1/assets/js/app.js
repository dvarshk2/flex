let cl = console.log;

// let person={name: 'John'};
// for(let key in person){
//     cl(key, person[key]); 
// }

// cl(person.name.toString());

// let objBase = Object.getPrototypeOf(person);
// cl(objBase);

// let des = Object.getOwnPropertyDescriptor(objBase, 'toString');
// cl(des);

// Object.defineProperty(person, 'name', {writable : true,  enumerable: true, configurable : false});


// person.name =' Deepti';
// Object.keys(person);
// cl(Object.keys(person));

// delete person.name;
// cl(person);

// let res = [1,1,2,2,2];

// function match(arr){
//     let a = 0;
//     let b = 0;
//     arr.forEach(ele => {
//         if(ele === 1){
//             a++
//         }else{
//             b++
//         }
//     });
//     if(a === b){
//         cl(`Tie`);
//     }else if( a > b){
//         cl(`A won by ${a}`);
//     }else{
//         cl(`B won by ${b}`)
//     }
// }
// match(res)

// function a(func, items){
//     let i = 0
//     for(let item of items){
//         if(func(item)){
//             items[i] = item
//             i = i + 1
//         }
//     }
// }

// function posit(arr, fn){
//     let pos = false;
//     for(let i =0; i < arr.length; i++){
//         let row = arr[i];
//         for(let j =0; j < row.length; j++){
//             if(fn(row[j])){
//                 pos = [i, j]
//             }
//         }
//     }
// }

// let mySet = new Set();
// mySet.add(1)
// mySet.add(1)
// cl(mySet)

// Object.defineProperty(obj, 'prop', {
//     writable : false,
//     value : 2
// })

// function myFun(y1, y2,...y3){
//     const [x1, ...[result]] = y3
//     cl(result)
// }
// const myArr = ['rock', 'paper', 'sci','lizard','spock']
// myFun(...myArr)

// const arr =[];
// try{
//     arr.push('try');
//     throw new Error();
// }catch(e){
//     arr.push('catch');
// } finally{
//     arr.push('finally')
// }
// cl(arr)
let x = 10;

let y = --x;
let z = x--;
cl(z)
cl(y)