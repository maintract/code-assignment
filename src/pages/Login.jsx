
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <div className="login-container">
                <form className="login-form">
                    <label className="login-label">Email</label>
                    <input className="login-input" type="email" />
                    <label className="login-label">Password</label>
                    <input className="login-input" type="password" />
                    <button className="login-button">Login</button>
                </form>
                <p className="login-register">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;