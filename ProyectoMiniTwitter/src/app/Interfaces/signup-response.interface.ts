export interface SignupResponse {
    token: string,
    username: string,
    email: string,
    role: string,
    photoUrl: string,
    created: Date,
    active: boolean
}