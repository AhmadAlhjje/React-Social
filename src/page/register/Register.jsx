import { useNavigate } from 'react-router-dom';
import './register.css'

export default function Register() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home'); // تغيير المسار
    }
    const handleClick1 = () => {
        navigate('/login'); // تغيير المسار
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
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input type='password' placeholder="Password" className="loginInput" />
                        <input type="password" placeholder="Password Again" className="loginInput" />
                        <button className='loginButton' onClick={handleClick}>Sign Up</button>
                        <button className='loginRegisterButton' onClick={handleClick1}>Log into Account</button>
                    </form>
            </div>
        </div>
    </div>
)
}
