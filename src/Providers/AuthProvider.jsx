import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import pt from 'prop-types'
import auth from "../Config/firebase.config";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    let googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    let [loading, setLoading] = useState(true)
    const axios = useAxios()


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        axios.post('/api/v1/logout', { email: user.email })
        return signOut(auth)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateNameImg = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        })
    }


    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (user) => {
            // console.log("state changed!!!")
            setUser(user)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [axios])


    const data = {
        user,
        loading,
        createUser,
        setLoading,
        login,
        logOut,
        googleLogin,
        updateNameImg
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: pt.node,
}
export default AuthProvider;