import http from "@shared/lib/http";
import type { TLoginResponse } from "./user.type";

interface IUseUser {
    login: (username: string, password: string) => Promise<TLoginResponse | null>
}

export function useUser (): IUseUser {

    async function login (username: string, password: string): Promise<TLoginResponse | null> {
        const response  = await http.post<TLoginResponse | null>(`users/authenticate`, { username, password });
        return Promise.resolve(response);
    }

    return {
        login
    }
}