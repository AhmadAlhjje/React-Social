import { useNavigate } from 'react-router-dom';
import './login.css'

export default function Login() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home'); // تغيير المسار
    }
    const handleClick1 = () => {
        navigate('/register'); // تغيير المسار
    }
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Lamasocail</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Lamasocail.
                </span>
            </div>
            <div className="loginRight">
                    <form className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <button className='loginButton' onClick={handleClick}>Log In</button>
                        <span className="loginForgot">Forgot  Password?</span>
                        <button className='loginRegisterButton'  onClick={handleClick1}>Create a New Account</button>
                    </form>
            </div>
        </div>
    </div>
  )
}
