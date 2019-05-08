import axios from 'axios'


export const dogAPI = axios.create({
  baseURL: 'https://dog.ceo/api'
})


export const serverAPI = axios.create({
  baseURL: 'http://localhost:5000'
})
