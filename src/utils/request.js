import axios from "axios"

let instance = axios.create()

instance.interceptors.request.use(r => {
  return r
},)

instance.interceptors.response.use(res => {
  console.log(res)
  return res
  if (res.status == 200) {

  }
}, e => {
  return Promise.reject(e)
})

function getUrl(path) {
  
}

export default instance