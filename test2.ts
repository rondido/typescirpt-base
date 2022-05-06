// type age = number;
// type Name = string;


// type playyer = {    
//     readonly name:Name,
//     age?:age
// } //반복된 타입 형식은 별칭을 사용하여 처리 가능

// // const play :playyer = {
// //     name: "park"
// // }

// // if(play.age < 10){

// // }

// // const playy : playyer
// //   = {
// //     name:"yyy"
// // }

// const playerMaker = (name:string) : playyer =>({
//     name 
// })

// const park = playerMaker("park")
// park.age = 12; //playyer라는 별칭을 타입으로 달아줬기대문에 number타입도 반환 가능

 const numbers :  number[] = [1,2,3,4]
 numbers.push(1)

 const names : readonly string[] = ["1","2"]
 
 const player : [string,number, boolean] = ["nico",1,true]