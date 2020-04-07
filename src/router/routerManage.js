import router from './index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {
    getToken
} from '../plugins/token'


NProgress.configure({
    showSpinner: false
})

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    const hasToken = getToken('token')
    if (hasToken) {
        if (to.path !== '/login') {
            next()

        } else {
            next('/home')
            to.meta.keepAlive = true
        }
        NProgress.done()
    } else {
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})