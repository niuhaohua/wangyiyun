import store from '../store/index'
import {
    getToken
} from '../plugins/token'
import V from 'vue'
import {
    Toast
} from 'vant';

// 配置API接口地址
var root = 'http://123.56.245.7:3000'
// var root = 'http://localhost:3000'
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
axios.interceptors.request.use(function (config) {
    console.log(getToken('token'))
    if (getToken('token')) {
        config.headers['token'] = getToken('token')
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

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
                if (res.data.code === 200 && success) {
                    success(res.data)
                } else {
                    if (res.data.code == 301) {
                        V.$router.push({
                            path: '/login'
                        })
                    }
                    alert(res.data.msg)
                }
            } else {
                alert(res.data)
                if (failure) {
                    failure(res.data)
                }
            }
        })
        .catch(function (err) {
            store.commit('LOADING_HIDE')
            alert(err)
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