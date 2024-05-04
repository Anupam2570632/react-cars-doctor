import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)

    if (loading) {
        return <div className="h-[100vh] w-[100vw] flex items-center justify-center"><span className="loading loading-lg loading-spinner text-primary"></span></div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateRoute;