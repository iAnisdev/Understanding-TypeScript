class DataStorage<T> {
    data: T[] = []

    addData(item: T) : void{
        this.data.push(item)
    }
    removeData(item: T) : void{
        this.data.splice(this.data.indexOf(item) , 1)
    }
    getData(): T[]{
        return [...this.data]
    }
}

const nameStorage = new DataStorage<string>()

nameStorage.addData('Anis')

const phoneStorage = new DataStorage<number>()

phoneStorage.addData(2)