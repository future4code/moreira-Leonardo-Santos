export enum UserTypes {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type User = {
    id: number,
    name: string,
    email: string,
    type: UserTypes,
    age: number
}