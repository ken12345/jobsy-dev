import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import userdata from'../mock/user.json';
import type { IUserState, IUserDeet } from "../interfaces/UserState.interface";

const initialState: IUserState = {
  username: "",
  authenticated: false,
  userDetails: null
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    // eslint-disable-next-line
    onLogin: (state: IUserState, action: PayloadAction<any>)=> {
      state.username = action.payload.username;
      console.log(userdata)
      const selected: IUserDeet | undefined = userdata.find((u: IUserDeet) => u.username === action.payload.username && u.password === action.payload.password);
      if(selected) {
        state.authenticated = true;
        state.userDetails = selected;
      } else {
         state.authenticated = false;
         state.userDetails = null
      }
    }

  }
});

export const {onLogin} = UserSlice.actions;
export default UserSlice.reducer;