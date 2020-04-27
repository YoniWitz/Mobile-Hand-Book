export interface IMagazineContent {
    title: string,
    subContent:IMagazineSubContent[],
    page: number
}

interface IMagazineSubContent {
    title: string,  
    page: number
}