import axios from 'axios'
import config from '../../../config'

export default {
    state: {
        isNameTest: null,
        isQuest: [],
        isAnswer: []
    },
    mutations: {
        updateTest(state, isDataTest) {
            state.isNameTest = isDataTest[0]
            state.isQuest = isDataTest[1]
            state.isAnswer = isDataTest[2]
        }
    },
    actions: {
        async TestLoading(context, id) {
            await axios.post(`${config.host}/api/ready/test`, id)
            .then(response => {
                context.commit('updateTest', [
                    response.data.data[0].name_test,
                    JSON.parse(response.data.data[0].quest), 
                    JSON.parse(response.data.data[0].answer)
                ])
            })
        }
    },
    getters: {
        isQuests(state) {
            return state.isQuest
        },

        isAnswers(state) {
            return state.isAnswer
        }
    }
}