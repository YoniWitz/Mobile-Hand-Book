export interface IContent {
    title: string,
    subContent:ISubContent[],
    page: number,
    key: string
}

interface ISubContent {
    title: string,  
    page: number,
    key: string
}