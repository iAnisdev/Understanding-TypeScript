namespace interfaces {
    export interface Client {
        status: string,
        since: Date
    }
    export interface Task{
        title: string,
        descp: string,
        isActive: boolean,
        since: Date
    }
}