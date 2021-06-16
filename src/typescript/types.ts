export interface RootState {
    user: User,
}

export interface User {
    isAuthenticated: boolean,
    id: number,
    firstName: string,
    lastName: string,
    email: string,
}