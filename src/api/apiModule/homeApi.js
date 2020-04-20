import Ajax from '../ajax'

// 登陆
const login = (params, success, failure) => Ajax.get('/login/cellphone', params, success, failure)
// 刷新登陆
const loginRefresh = (params, success, failure) => Ajax.get('/login/refresh', params, success, failure)

//获取用户详情263158514
const userDetail = (params, success, failure) => Ajax.get('/user/detail', params, success, failure)

//获取banner
const banner = (params, success, failure) => Ajax.get('banner', params, success, failure)

// 获取网易云热评
const hotwallList = (params, success, failure) => Ajax.get('/comment/hotwall/list', params, (res)=>{
    return success(res.data)
}, failure)

// 所有歌单分类
const catlist = (params, success, failure) => Ajax.get('/playlist/catlist', params, success, failure)

// 获取热门歌单分类
const songsSheetTags = (params, success, failure) => Ajax.get('/playlist/hot', params, success, failure)

// 获取某类歌单list
const songsSheetList = (params, success, failure) => Ajax.get('/top/playlist/highqualit', params, success, failure)

// 获取歌单里歌曲列表
const songSheetDetail = (params, success, failure) => Ajax.get('/playlist/detail', params, success, failure)

//歌曲播放地址
const songsUrl = (params, success, failure) => Ajax.get('/song/url', params, success, failure)


// 热门话题(需登陆)
const topic = (params, success, failure) => Ajax.get('/hot/topic', params, success,failure)
// 热门话题(需登陆)
const topicdetail = (params, success, failure) => Ajax.get('/hot/topic/list', params, success, failure)


//每日推荐歌单（需登陆）
const resource = (params, success, failure) => Ajax.get('/recommend/resource', params, success, failure)

//每日歌曲推荐（需登陆）
const songs = (params, success, failure) => Ajax.get('/recommend/songs', params, success, failure)

// 推荐新音乐
const newsong = (params, success, failure) => Ajax.get('/personalized/newsong', params, success, failure)

// 新歌速递
const topsong = (params, success, failure) => Ajax.get('/top/song', params, success, failure)

// 排行榜榜单
const toplist = (params, success, failure) => Ajax.get('/toplist/detail', params, success, failure)


export default {
    login,
    loginRefresh,
    hotwallList,
    songsSheetTags,
    songsSheetList,
    songSheetDetail,
    songsUrl,
    topic,
    resource,
    songs,
    banner,
    userDetail,
    newsong,
    catlist,
    toplist,
    topsong,
    topicdetail
}