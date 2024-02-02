import { User } from "./user"

export interface JwtResponse {
    access_token:string,
    expires_in:string,
    user: User
}
