import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Home/components/Navbar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import axios from "axios";

const Login = () => {
    const { logIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                console.log(result.user)
                const user = { email }
                //get access token
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <>
            <NavBar />
            <div className="hero mt-[68px] min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full lg:w-[30%]">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>New to CarDoctor, please <Link className="text-blue-500 underline underline-offset-4" to={'/register'}>register</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;