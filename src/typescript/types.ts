export interface AuthServerResponse {
    data: boolean
}

export interface Coordinates {
    latitude: number,
    longitude: number
}

export interface Passion {
    name: string,
    list: string[]
}

export interface PassionListCategory {
    name: string,
    category: string,
    type: string,
}