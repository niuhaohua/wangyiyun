const state = {
    loading: false
}

const mutations = {
    LOADING_SHOW: (state) => {
        state.loading = true
    },
    LOADING_HIDE: (state) => {
        state.loading = false
    }
}

export default {
    state,
    mutations,
}