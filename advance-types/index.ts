type Admin = {
    name: string,
    restaurants: number[]
}

type waiter = {
    name: string 
    startDate: Date
}

type manager = Admin & waiter

let anis : manager = {
    name: 'Anis',
    startDate: new Date(),
    restaurants: [1]
}

type bird = {
    flyingSpeed: number
}

type Horse = {
    runningSpeed: number
}

type Animal = bird | Horse
