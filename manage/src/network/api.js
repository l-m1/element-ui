import Axios from 'axios'

const api = Axios.create({
  baseURL:'http://aerowang.cn:6688/api/private/v1/',
  timeout:3000
})

export default api