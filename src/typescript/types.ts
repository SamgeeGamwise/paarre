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