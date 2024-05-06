import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation()

    if (user) {
        return children
    }
    if (loading) {
        return <div className="h-[100vh] w-[100vw] flex items-center justify-center"><span className="loading loading-lg loading-spinner text-primary"></span></div>
    }
    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivateRoute;