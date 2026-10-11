export interface Ipost{
    title:string,
    body:string,
    id:string,
    userId:string
}

export interface IpostRes{
    [key:string]:Ipost
}