const state = {
    loading: false,
    num: 0
}

const mutations = {
    LOADING_SHOW: (state) => {
        state.num++
        if (state.num > 0) {
            state.loading = true
        }
    },
    LOADING_HIDE: (state) => {

        state.num--
        console.log(state.num)
        if (state.num === 0) {
            state.loading = false
        }
    }
}

export default {
    state,
    mutations,
}