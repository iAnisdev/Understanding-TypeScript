
function MethodLog(target : any , propertyName: string , descriptor: PropertyDescriptor){
    console.log("Method decorator ")
    console.log("target " , target)
    console.log("propertyName " , propertyName)
    console.log("descriptor " , descriptor)

    
}

class Ticket {
    title: string
    constructor (title: string ){
        this.title = title
    }
    @MethodLog
    getTitle(){
        return this.title
    }
}