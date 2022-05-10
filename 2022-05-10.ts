//인터페이스 강점
// 프로퍼티를 여러개 축적 시킴
// 타입과 같이 인터페이스는 같은 목적으로 사용 가능 
//타입스크립트에게 오브젝트의 모양을 알려줌
// interface User{
//     name:string    
// }

// interface User{
//     lastName:string
// }

// interface User{
//     health:number
// }

// const park: User={
//     name:"park",
//     lastName:"jin",
//     health:10
// }

//추상클래스는 상속받는 다른 클래스가 가질 프로퍼티와 메소드를 지정
// abstract class User {
//     constructor(
//         protected firstName:string,
//         protected lastName:string
//     ){}
//     abstract sayHi(name:string):string
//     abstract fullName():string
// }

// class Player extends User{
//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     sayHi(name: string): string {
//         return `Hello ${name} My name is ${this.fullName()}`
//     }        
//}

//new User 추상 클래스는 인스턴스 생성 불가


interface User {
    firstName:string,
    lastName:string   
    sayHi(name:string):string
    fullName():string
}
interface Human {
    health:number
}
class Player implements User, Human{
      constructor(
          public firstName:string,
          public lastName:string,
          public health:number
      ){}
      fullName(){
        return `${this.firstName} ${this.lastName}`
      }
      sayHi(name: string): string {
            return `Hello ${name} My name is ${this.fullName()}`
    }  
}

function makeUser(user:User){
    return "hi"
}

makeUser({
    firstName:"park",
    lastName:"las",
    fullName: () =>"xx",
    sayHi:(name)=>"string"
})