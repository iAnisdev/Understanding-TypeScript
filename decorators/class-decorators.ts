function Logger(status: string){
    return function(target: Function){
        console.log(status)
    }
}

@Logger('new')
class Person {
    name: string
    constructor (name: string){
        this.name = name
        console.log("Person generated")
    }
}

const bob = new Person('bob')


function AddInfoMessage (html: string , targetId: string){
    return function(_: Function){
        var targetEl = document.getElementById(targetId) as HTMLElement
        if (targetEl) {
            targetEl.innerHTML = html
        }
        console.log('html added to block')
    }
}

@Logger('last')
@AddInfoMessage('<h1>Hello there</h1>' , 'app')
class NotificationBlock {
    timestamp: Date 
    constructor (){
        this.timestamp = new Date()
        console.log('class constructor inited')
    }
}

let notify = new NotificationBlock()