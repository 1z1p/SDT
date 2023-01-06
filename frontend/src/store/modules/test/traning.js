import axios from 'axios'
import config from '../../../config'

export default {
    state: {
        isNameTest: []
    },
    mutations: {
        updateName(state, isNameTest) {
            state.isNameTest = isNameTest
        }
    },
    actions: {
        async nameTestLoading(context) {
            await axios.post(`${config.host}/api/ready/name/test`)
            .then(response => {
                context.commit('updateName', response.data.data)
            }).catch(error => {
                console.log(error)
            })
        }
    },
    getters: {
        allNameTest(state) {
            return state.isNameTest
        }
    }
}