import axios from 'axios'

const axiosRequest = async (searchParam: string, offset = 0) => {
    return axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa&q=${searchParam}&limit=20&offset=${offset}&lang=en`,
    })
}

export default axiosRequest