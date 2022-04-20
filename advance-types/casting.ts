const userInput = document.getElementById('user-input') as HTMLInputElement;


interface ErrorContainer {
    [prop: string] : string
}

let emailError: ErrorContainer = {
    name: 'not_working',
    msg: 'What you are trying are not working'
}


let username = ''

let stored_data = username ?? 'Bob'