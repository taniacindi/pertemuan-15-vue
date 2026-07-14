import axios from 'axios'

const api = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'x-api-key': 'pro_fd5642096328296e1675b9bd2cfa079f9b5b9d4bc153f87135ac9469a7e75bcc'
  }
})

export default api