import User from "@/models/User";

export interface AuthServerResponse {
    data: any
}

export interface Coordinates {
    latitude: number,
    longitude: number
}

export interface Passion {
    name: string,
    list: string[]
}
export interface LoginPayload {
    email: string,
    password: string
}

export interface RegisterPayload {
    firstName1: string,
    lastName1: string,
    firstName2: string,
    lastName2: string,
    email: string,
    password: string
}


export interface UpdateAccount {
    endpoint: string,
    [x: string]: any
}

export interface PassionListCategory {
    name: string,
    category: string,
    type: string,
}

export interface ServerResponse<T> {
    success: boolean,
    data: T
}

export interface ServerError {
    success: boolean,
    data: string
}