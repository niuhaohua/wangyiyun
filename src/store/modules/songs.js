const state = {
    songsId: 0
}

const mutations = {
    GET_SONGSID: (state,songs) => {
        state.songsId = songs.id
    },
}

export default {
    state,
    mutations,
}