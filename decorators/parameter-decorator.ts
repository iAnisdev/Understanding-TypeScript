function parameterLog(target : any , name: string , position: number){
    console.log("parameter decorator ")
    console.log("target " , target)
    console.log("name " , name)
    console.log("position " , position)

}
class Item {
    title: string
    private _price!: number
    set price(val: number) {
        if(val > 0 ){
            this._price = val
        }else{
            throw new Error("Invalid Price - should be greater than 0")
        }
    }
    constructor (@parameterLog t: string ,@parameterLog p: number){
        this.title = t
        this.price = p
    } 
}