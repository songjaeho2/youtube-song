import axios from "axios";

export const BASE_URL = 'https://youtube-v311.p.rapidapi.com'

const options = {


    params: {
    maxResults: '48',

    },
    headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v311.p.rapidapi.com'
    }
};



export const fetchFromAPI = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data)
    return data;
}
