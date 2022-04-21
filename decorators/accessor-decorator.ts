function AccesorLog(target : any , propertyName: string , descriptor: PropertyDescriptor){
    console.log("accessor decorator ")
    console.log("target " , target)
    console.log("propertyName " , propertyName)
    console.log("descriptor " , descriptor)

}
class Block {
    title: string
    private _price!: number
    @AccesorLog
    set price(val: number) {
        if(val > 0 ){
            this._price = val
        }else{
            throw new Error("Invalid Price - should be greater than 0")
        }
    }
    constructor (t: string , p: number){
        this.title = t
        this.price = p
    }
}