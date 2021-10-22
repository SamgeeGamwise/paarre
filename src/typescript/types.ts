export type Coordinates = {
    latitude: number,
    longitude: number
}

export type LoginType = {
    email: string,
    password: string
}

export type RegisterType = {
    email: string,
    password: string,
    passwordConfirm?: string,
    firstName1: string,
    lastName1: string,
    firstName2: string,
    lastName2: string,
}

export type UpdateAccount = {
    endpoint: string,
    [x: string]: any
}

// API Types
export type AuthServerResponse = {
    data: any
}

export type ServerResponse<T> = {
    success: boolean,
    data: T
}

export type ServerError = {
    success: boolean,
    error: string
}

export type ErrorMessage = {
    show: boolean,
    message: string
}