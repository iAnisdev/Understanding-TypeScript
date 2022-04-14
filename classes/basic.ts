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


class ITPerson extends Person {
    dept: string
    constructor (name: string ,  age: number ,  gender : Gender,  isAllowed: Boolean , dept: string) {
        super(name , age , gender , isAllowed)
        this.dept = dept
    }
}
