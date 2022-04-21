function BaseTechStack(value: string) {
    return function <T extends { new(...args: any[]): {}}>(target: T) {
        return class extends target {
            basiclang =value
        }
    }
}

@BaseTechStack('ts')
class Developer {
    name: string
    yofexp: number
    basiclang!: string[]

    constructor(n: string, exp: number) {
        this.name = n
        this.yofexp = exp

    }
}

var bobby = new Developer('bobby' , 4)

console.log(bobby)