export interface IUserState {
  username: string;
  authenticated: boolean;
  userDetails: IUserDeet | null;
  userId: number | null;
}

export interface IUserDeet {
  id: number;
  username: string;
  password: string;
  fullname: string
}

export interface ILoginForm {
  username: string;
  password: string;
}

