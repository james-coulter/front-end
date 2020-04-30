import axios from 'axios';



export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    if(token === 'undefined') {
        console.log('Not logged on');

    }else{
        console.log('Logged In', {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        });
    }

        return axios.create({
        baseURL:'https://spotify-song-suggester1.herokuapp.com/api',
        headers:{
            'Content-Type': 'application/json',
           'Authorization': `${token}`,
       }
       });

}   ;