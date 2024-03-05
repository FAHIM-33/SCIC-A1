import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import pt from 'prop-types'
import Loading from "../Components/Loading";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) { return <Loading></Loading> }
    if (user?.email) { return children }

    return <Navigate to="/login"></Navigate> 
};

PrivateRoute.propTypes = {
    children: pt.node,
}
export default PrivateRoute;