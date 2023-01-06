import axios from 'axios'
import config from '../../../config'

export default {
    state: {
        isNewsData: [],
        isNewsFullData: []
    },
    mutations: {
        updateNews(state, isNewsData) {
            state.isNewsData = isNewsData
        },

        updateNewsFull(state, isNewsFullData) {
            state.isNewsFullData = isNewsFullData
        }
    },
    actions: {
        async newsLoading(context) {
            await axios.post(`${config.host}/api/news`)
            .then(response => {
                context.commit('updateNews', response.data.message)
            })
        },
        async newsFullLoading(context, id) {
            await axios.post(`${config.host}/api/news-full`, id)
            .then(response => {
                context.commit('updateNewsFull', response.data.message)
            })
        }
    },
    getters: {
        allNews(state) {
            return state.isNewsData
        },

        allNewsFull(state) {
            return state.isNewsFullData
        }
    }
}