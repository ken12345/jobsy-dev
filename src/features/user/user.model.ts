import http from "@shared/lib/http";
import type { TLoginResponse, TUser, TUserState } from "./user.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface IUseUser {
    login: (username: string, password: string) => Promise<TLoginResponse | null>
}

const initUserState: TUserState = {
    authenticated: false
}

const userSlice = createSlice({
    name: `user`,
    initialState: initUserState,
    reducers: {
        authenticateUser: (state, action: PayloadAction<TUser>) => {
            state.authenticated = true;
            state.details = action.payload;
        },
        reset: () => initUserState
    }
});

export const { authenticateUser, reset } = userSlice.actions;
export const userReducer = userSlice.reducer;

export function useUser (): IUseUser {

    async function login (username: string, password: string): Promise<TLoginResponse | null> {
        const response  = await http.post<TLoginResponse | null>(`users/authenticate`, { username, password });
        return Promise.resolve(response);
    }

    return {
        login
    }
}