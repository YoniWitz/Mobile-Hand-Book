export interface IContent {
    title: string,
    subContent:ISubContent[],
    page: number
}

interface ISubContent {
    title: string,  
    page: number
}