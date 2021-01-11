import axios from "axios"

const pathMap = {
  'default': 'https://shop.81hbz.com',
  'union': '',
}

let instance = axios.create({
  timeout: 1000 *10,
  responseType: 'json',
})

instance.interceptors.request.use(r => {
  return r
},)

instance.interceptors.response.use(res => {
  return res.data
}, e => {
  return Promise.reject(e)
})

function getUrl(path, pathKey) {
  if (path.startsWith('http')) {
    return path
  }

  return path.startsWith('/') ? `${pathMap[pathKey]}${path}` : `${pathMap[pathKey]}/${path}`
}

export function httpGet(url, params={}, extra = {
  pathKey: 'default'
}) {
  return instance.get(getUrl(url, extra.pathKey), {
    params,
  })
}

export default instance