enum Gender {
    male = "Male",
    female = "Female"
}

class Person {
    name: string
    age: number
    gender: Gender
    private isAllowed: Boolean
    constructor (name: string ,  age: number ,  gender : Gender,  isAllowed: Boolean){
        this.name = name
        this.age = age
        this.gender = gender
        this.isAllowed = isAllowed
    }
     getStatus(){
        return this.isAllowed
    }
}

let amjad = new Person('Amjad' ,  27 ,Gender.male , true)