import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    baseURL:'https://spotify-song-suggester1.herokuapp.com/api',
    headers: {
        Authorization: localStorage.getItem("token")
      }
    });
  };
  export default axiosWithAuth
  