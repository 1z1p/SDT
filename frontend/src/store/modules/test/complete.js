import axios from 'axios'
import config from '../../../config'

export default {
    state: {
        isStatus: null,
        isResult: []
    },
    mutations: {
        updateResult(state, isResult) {
            state.isStatus = isResult[0]
            state.isResult = isResult[1]
        }
    },
    actions: {
        async FinishTest(context, data) {
            await axios.post(`${config.host}/api/result/test`, data)
            .then(response => {
                context.commit("updateResult", [response.data.data.status, response.data.data.result])
            })
        }
    },
    getters: {
        isStatus(state) {
            return state.isStatus
        },

        isResult(state) {
            return state.isResult
        },
    }
}