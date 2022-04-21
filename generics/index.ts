interface dataCopy<T>{
    uid: number,
    name: string,
    data: T
}

const propfle: dataCopy<object> = {
    uid: Date.now(),
    name: 'Profile',
    data: {name: 'Bob' , age: 12}
}

const todo: dataCopy<String[]> = {
    uid: Date.now(),
    name: 'Todo List',
    data: ['Learn TS' , 'Learn Angular']
}


let myPromise: Promise<string> =  new Promise((resolve , reject) => {
    resolve('Hello')
})

myPromise.then((resp) => {
    console.log(resp)
})

function merge <T extends {name: string}, U extends {age: number}> (objA: T ,  objB: U) : T & U {
    return Object.assign(objA , objB)
}

function greetingUser<T extends object, U extends keyof T> (obj : T , key: U) : string {
    return "Hello " + obj[key]
}

greetingUser({name: 'Anis'},'name')

merge({name: 'bob'} , {age: 21})


