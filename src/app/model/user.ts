import { Role } from "./role";

export interface User {
    username: string;
    password: string;
    roles_name: Role;
    token: string;
}