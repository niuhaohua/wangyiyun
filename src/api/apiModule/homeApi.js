import Ajax from '../ajax'

// 登陆
const login = (params, success, failure) => Ajax.get('/login', params, success, failure)
// 刷新登陆
const loginRefresh = (params, success, failure) => Ajax.get('/login/refresh', params, success, failure)

// 获取网易云热评
const hotwallList = (params, success, failure) => Ajax.get('/comment/hotwall/list', params, (res)=>{
    return success(res.data)
}, failure)

// 获取歌单分类
const songsSheetTags = (params, success, failure) => Ajax.get('/playlist/hot', params, success, failure)

// 获取某类歌单list
const songsSheetList = (params, success, failure) => Ajax.get('/top/playlist', params, success, failure)

// 获取歌单里歌曲列表
const songSheetDetail = (params, success, failure) => Ajax.get('/playlist/detail', params, success, failure)

//歌曲播放地址
const songsUrl = (params, success, failure) => Ajax.get('/song/url', params, success, failure)


// 热门话题(需登陆)
const topic = (params, success, failure) => Ajax.get('/hot/topic', params, ()=>{
}, failure)

export default {
    login,
    loginRefresh,
    hotwallList,
    songsSheetTags,
    songsSheetList,
    songSheetDetail,
    songsUrl,
    topic
}