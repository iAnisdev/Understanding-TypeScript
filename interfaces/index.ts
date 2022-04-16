interface Person {
    name: string
    age: number
    gender: string
}

interface Greeting {
    greet(phrase: string ) : void
}

interface GreetingWithBye extends Greeting {
    bye(phrase: string ) : void
}

interface addFunc {
    (a: number ,  b: number) : number
}

let anis: Person = {
    name: 'Anis',
    age: 28,
    gender: 'M'
}

class bob implements Person , Greeting {
    name: string
    age: number
    gender: string
    constructor(name: string , age: number , gender: string){
        this.name = name
        this.age = age 
        this.gender = gender
    }

    greet(phrase: string): void {
        console.log(phrase + " " + this.name)
    }
}
class lola implements Person , GreetingWithBye {
    name: string
    age: number
    gender: string
    constructor(name: string , age: number , gender: string){
        this.name = name
        this.age = age 
        this.gender = gender
    }

    greet(phrase: string): void {
        console.log(phrase + " " + this.name)
    }
    
    bye(phrase: string): void {
        console.log(phrase + " " + this.name)
    }
}

let addFunction: addFunc ;

addFunction =  (n1: number , n2 :number) : number => {
    return n1 + n2
}