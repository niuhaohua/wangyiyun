const state = {
    songsId: 0
}

const mutations = {
    GET_SONGSID: (state,songs) => {
        console.log(songs.id)
        state.songsId = songs.id
    },
}

export default {
    state,
    mutations,
}