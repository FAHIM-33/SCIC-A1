/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center">
            <div className="h-32 w-32 border-2 border-crim rounded-full animate-ping -mt-32"></div>
        </div>
    }
    if (!loading && !user) { return <Navigate state={{ from: location.pathname }} to='/login'></Navigate> }

    return children

};

export default PrivateRoute;