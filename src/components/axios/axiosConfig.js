import axios from 'axios'

export const clienteAxios = axios.create({
  baseURL: 'https://sigett.herokuapp.com/sigett.apiservice'
})

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
