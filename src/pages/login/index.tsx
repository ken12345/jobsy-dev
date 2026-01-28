import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { onLogin } from '../../reducers/user';
import InputText from '../../components/input-text';
import './login.css';

const Login = () => {

  const dispatch = useDispatch();
  const authenticated = useSelector((state: RootState) => state.user.authenticated);
  const navigate = useNavigate();

  useEffect(() => {
  if (authenticated) {
    console.log("kensh authenticated", authenticated);
    navigate("/home")
  }
}, [authenticated]);

  const submItHandler = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    dispatch(onLogin(data));
  }  
  return(
    <>
      <div className='login'>
        <div className='form-container'>
          <form onSubmit={submItHandler}>
            <InputText placeHolder='Username' type='text' required={true} name="username" width='40%'></InputText>
            <InputText placeHolder='Password' type='password' required={true} name="password" width='40%'></InputText>
            <div><input type='submit' value='Login'/></div>
          </form>
        </div>
        <div className='logo'></div>
      </div>
    </>
  )
}

export default Login;