export interface Student {
    name: string,
    points: number,
    username: string,
}

export interface Product {
    name: string,
    price: number,
}

export const students: Student[] = [
    {
        name: "Naous",
        points: 100,
        username: "naous.islam"
    },{
        name: "Sameer",
        points: 100,
        username: "sam.hossain"
    },{
        name: "Sameer",
        points: 100,
        username: "sam.hossain2"
    }
]

export const products: Product[] = [
    {
        name: "Infinity Cube",
        price: 30
    },{
        name: "Gear cube",
        price: 30
    }
]