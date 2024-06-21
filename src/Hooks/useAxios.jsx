import axios from "axios";


const instance = axios.create({

    baseURL: 'https://library-v2-theta.vercel.app',
    // baseURL: 'http://localhost:5000',

});


const useAxios = () => {
  return instance
};

export default useAxios;
