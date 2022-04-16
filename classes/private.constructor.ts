class Department {
    id:  string
    constructor (id: string) {
        this.id = id
    }
}

class FinanceDepartment extends Department {
    reports: string[]
    private static instance: FinanceDepartment
    private constructor (reports: string[]){
        super('#finance')
        this.reports = reports
    }

    static getInstance(){
        if(FinanceDepartment.instance){
            return this.instance
        }
        this.instance = new FinanceDepartment([])
    }
}

class ITDepartment extends Department {
    name: string
    constructor (name: string){
        super('#IT')
        this.name = name
    }
}


