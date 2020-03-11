import store from '../store/index'

// 配置API接口地址
var root = 'http://123.56.245.7:3000'
// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType(obj) {
    return toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 参数过滤函数
function filterNull(o) {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key]
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key])
        }
    }
    return o
}
/**
 * @param  { String } method 方法
 * @param  { String } url    url地址
 * @param  { Object } params 参数
 * @param  { Function } success 成功回调函数
 * @param  { Function } failure 失败回调函数
 */
function apiAxios(method, url, params, success, failure) {
    store.commit('LOADING_SHOW')
    if (params) {
        params = filterNull(params)
    }
    axios({
            method: method,
            url: url,
            data: method === 'POST' || method === 'PUT' ? params : null,
            params: method === 'GET' || method === 'DELETE' ? params : null,
            baseURL: root,
            withCredentials: false
        })
        .then(function (res) {
            store.commit('LOADING_HIDE')
            if (res.status === 200) {
                if (success) {
                    success(res.data)
                }
            } else {
                if (failure) {
                    failure(res.data)
                } else {
                    window.alert('error: ' + JSON.stringify(res.data))
                }
            }
        })
        .catch(function (err) {
            setTimeout(() => {
                store.commit('LOADING_HIDE')
            }, 3000)
            // window.alert('api error, HTTP CODE: ' + err)
        })
}

// 返回在vue模板中的调用接口
export default {
    get: function (url, params, success, failure) {
        return apiAxios('GET', url, params, success, failure)
    },
    post: function (url, params, success, failure) {
        return apiAxios('POST', url, params, success, failure)
    },
    put: function (url, params, success, failure) {
        return apiAxios('PUT', url, params, success, failure)
    },
    delete: function (url, params, success, failure) {
        return apiAxios('DELETE', url, params, success, failure)
    }
}