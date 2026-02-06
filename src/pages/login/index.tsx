import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
// import { useDispatch } from "react-redux";
// import type { RootState } from "../../store";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { onLogin } from '../../reducers/user';

import LoginSVG from '../../assets/login.svg';
import logo from "../../assets/bitezy.png"

import './login.css';


const Login = () => {
 
 const apiKey = import.meta.env.VITE_API_KEY;
const apiURL = import.meta.env.VITE_API_URL;

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // const dispatch = useDispatch();
  // const authenticated = useSelector((state: RootState) => state.user.authenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("kensh authenticated", isAuthenticated);
      navigate("/admin/home")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const submItHandler = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const reseult = await fetch(`${apiURL}users/authenticate`,
      {method: "POST", headers: {'Content-Type': "application/json", "x-api-key": apiKey}, body: JSON.stringify({username, password})}).then(
       // eslint-disable-next-line
      (res) => {
        return res.json()
      });
      setIsAuthenticated(reseult ? true : false);
    } catch (error) {
      setIsAuthenticated(false);
      console.log(error)
    }
    // dispatch(onLogin({username, password}));
  }

  return(
    <>
      <div className='login'>
        <div className='rhs'>
          <div>
            <img src={LoginSVG}/>
          </div>
        </div>
        <div className='form-container'>
          <div className='logo'>
            <div className='bitezy-logo'>
              <img src={logo} />
            </div>
            <div className='bitezy'>
              BITEZY
            </div>
          </div>
          <div className='f-holder'>
            <form onSubmit={submItHandler}>
              <div className='text-input'>
                <div className='label'>Username</div>
                <div><input type='text' value={username}  onChange={(e) => setUsername(e.target.value)} required/></div>
              </div>
              <div className='text-input'>
                <div className='label'>Password</div>
                <div><input type='password' value={password}  onChange={(e) => setPassword(e.target.value)} required/></div>
              </div>
              <div className='submit-container'><input type='submit' value='Login' className='submit'/></div>
              <div className='forgot-password'>Forgot password? <span>Contact us</span></div>
            </form>
          </div>
          {isAuthenticated === false && (
            <div className='error-container'><div>invalid username or password</div></div>
          )}         
        </div>
      </div>
    </>
  )
}

export default Login;