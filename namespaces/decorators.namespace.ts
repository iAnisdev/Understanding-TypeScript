namespace decorators {
    export function createdAt(target: any){
       return class extends target {
            createdAt = new Date()
       }
    }
}