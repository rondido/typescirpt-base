//  let a:unknown; //typescript로 부터 보호를 받는다. 변수의 타입을 미리 알지 못할때 사용

// //let b = a + 1; 이거는 error
  
// if(typeof a === 'number'){
//     let b = a + 1
// }

// if(typeof a === "string"){
//     let b = a.toUpperCase();
// }

// function hello(){
//     console.log('x');
// } void


// function hello(name:string|number){
//     if(typeof name === "string"){
//         name
//     }else if(typeof name === "number"){
//         name
//     }else{
//         name
//     }
// }

// 오버로딩
// 함수가 여러개의 call signatures를 가지고 있을때 발생

// type Add = {
//     (a:number, b:number) : number
//     (a:number, b:string) : number

// }
 
// const add:Add = (a,b) => {
//     if(typeof b ==="string") return a
//     return a + b;
// }

// type Config = {
//     path:string,
//     state:object
// }

// type Push = {
//     (path:string):void
//     (config:Config):void
// }

// const push:Push = (config) =>{
//     if(typeof config === "string") {console.log(config)}
//     else{console.log(config.path, config.state)}
// }

// type Add = {
//     (a:number, b:number) :number
//     (a:number, b:number, c:number ) : number,

// }
// const add:Add = (a,b,c?:number)=>{ // 여기서는 c가 옵션이기때문에 c가 number일 것이라고 정해주어야한다.
//     if(c) return a + b + c
//     return a + b
// }

//다형성

// type SuperPrint = {
//     //concrete type 우리가 전부터 봐왔던 타입 ex)string boolean number
//     //generic 타입의 placeholder와 같다.
//     <TypePlaceholder>(a:TypePlaceholder[]):TypePlaceholder
//     // (arr:string[]):void
//     // (arr:boolean[]):void
//     // (arr:number|boolean[]):void

// }
// type SuperPrint = <T,M>(a:T[], b:M) => T

// const superprint:SuperPrint = (a) => a[0];

// function superprint<T>(a:T[]){
//     return a[0]
// }

// const a = superprint([1,2,3])
// const b = superprint([true,false,true])
// const c = superprint(["a","b","c"])
// const d = superprint([1,2,true,false])

// type Player<E> = {
//     name:string
//     extraInfo:E
// }
// type ParkExtra = {
//     favFood:string
// } 

// type ParkPlayer = Player<ParkExtra>

// const park: Player<{favFood:string}> ={
//     name:"park",
//     extraInfo:{
//         favFood:"kim"
//     }
// }

// const eun : Player<null> = {
//     name:"eun",
//     extraInfo:null
// }

//객체 지향

// abstract class User {
//     constructor(
//         protected firstName:string,
//         protected lastName:string,
//         protected nickname:string
//     ){}
//     abstract getNickName():void
     
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// class Player extends User{
//     getNickName(){
//         console.log(this.nickname);
//     }   
// }

// const park = new Player("park","las","박");

// type Words ={
//     [key:string]:string
// }

// class Dict {
//     private words:Words
//     constructor(){
//         this.words = {} 
//     }
//     add(word:Word){
//         if(this.words[word.term] === undefined){
//             this.words[word.term] = word.def;
//         }
//     }
//     def(term:string){
//         return this.words[term]
//     }
//     static hello(){
//         return "hello";
//     }
// }

// class Word {
//     constructor(
//         public readonly term:string, //값을 불러오지만 바꿀 수는 없다.
//         public readonly def :string
//     ){}
// }
// const kimchi = new Word("kimchi", "한국의 음식");


// const dict = new Dict()
// dict.add(kimchi);
// dict.def("kimchi")

//interface

// type Nickname= string;
// type health = number
// type Friends = Array<string>

// type Player={
//     nickname:string,
//     healthBar:number
// }

// const park : Player = {
//     nickname:"park",
//     healthBar:10
// }

// type Team = "red" | "blue" | "yellow"
// type Health = 1 | 5 | 10

// interface Player {
//     nickname:string,
//     team:Team
//     health:Health
// }

// interface Person {
//     nickname:string,
//     team:Team
//     health:Health
// }


// interface User{
//     name:string

// }
//인터페이스는 타입스크립트에게 오브젝트라고 설명할때만 사용할 수 있다.
// type User = {
//     name:string

// }
// interface Player extends User {
//     name:string
// }
// type Player = User &{
//     name:string

// }
// const park : Player = {
//     name:"park"
// }
