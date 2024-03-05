import axios from "axios";
import { useEffect } from "react";
import auth from "../Config/firebase.config";
import { signOut } from "firebase/auth";


const instance = axios.create({
  baseURL: 'http://localhost:5000',
  // baseURL: 'https://library-server-gamma.vercel.app',
  withCredentials: true,
});


const logOut = () => {
  return signOut(auth)
}

const useAxios = () => {
  // const { logOut } = useContext(AuthContext)


  useEffect(() => {

    axios.interceptors.response.use(function (res) {
      return res;

    }, function (err) {
      let stat = err?.request?.status
      console.log("Error caught in Interceptor", stat)
      if (stat == 401 || stat == 403) {
        logOut()
      }
    });

  }, [])


  return instance
};

export default useAxios;