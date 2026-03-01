import type { TUser } from "@features/user";
import { makeAutoObservable } from "mobx";

interface IStore {
    isAuthenticated: boolean
    user?: TUser
    authenticated: (user: TUser) => void
}

class Store implements IStore {
    public isAuthenticated: boolean = false;
    public user?: TUser;

    constructor () {
        makeAutoObservable(this);
    }

    public authenticated (user: TUser): void {
        this.user = user;

    }
}

const store = new Store();
export default store;