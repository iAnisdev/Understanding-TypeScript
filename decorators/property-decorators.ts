function PropertyLog(target : any , propertyName: string){
    console.log("property decorator ")
    console.log("target " , target)
    console.log("propertyName " , propertyName)

}
class Product {
    @PropertyLog
    title: string
    private _price!: number

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

    getPriceWithTax(tax: number){
        return this._price * (1. + tax)
    }
}