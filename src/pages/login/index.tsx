import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { onLogin } from '../../reducers/user';
import InputText from '../../components/input-text-component';
import './login.css';

const Login = () => {

  const dispatch = useDispatch();
  const authenticated = useSelector((state: RootState) => state.user.authenticated);
  const navigate = useNavigate();

  useEffect(() => {
  if (authenticated) {
    console.log("kensh authenticated", authenticated);
    navigate("/admin/home")
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [authenticated]);

  const submItHandler = (e: event) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    dispatch(onLogin(data));
  }  
  return(
    <>
      <div className='login'>
        <div className='form-container'>
          <div className='logo'>SMART <span><b>M</b></span>E</div>
          <form onSubmit={submItHandler}>
            <InputText type='text' required={true} name="username" width='40%' label='Username'></InputText>
            <InputText type='password' required={true} name="password" width='40%' label='Password'></InputText>
            <div><input type='submit' value='Login' className='submit'/></div>
          </form>
        </div>
        <div className='rhs'></div>
      </div>
    </>
  )
}

export default Login;