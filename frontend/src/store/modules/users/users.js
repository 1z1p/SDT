import axios from 'axios'
import config from '../../../config'
import router from '../../../router/index'

export default {
    state: {
        data: [],
        isCondition: null,
        isAutoriztion: {
            Auth: false,
            isName: null
        },
        isNav: [
            { 
                path: '/auth', 
                title: 'Войти', 
                auth: false
            }
        ]
    },
    mutations: {
        updateCondition(state, isCondition) {
            state.isCondition = isCondition
        },

        updateAutoriztion(state, isAuth) {
            state.isAutoriztion.Auth = isAuth[1]
            state.isAutoriztion.isName = isAuth[0]
        },

        updateData(state, data) {
            state.data = data
        }
    },
    actions: {
        async SignUp(context, newData) {
            try {
                await axios.post(`${config.host}/api/register`, newData)
                .then(response => {
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('name', response.data.name)

                    this.dispatch("infoToken")
                    router.push('/')
                })
                .catch(error => {
                    context.commit('updateCondition', error.response.data.message)
                })
            } catch (error) {
                context.commit('updateCondition', 'Ошибка')
            }
        },

        async SignIn(context, newData) {
            try {
                await axios.post(`${config.host}/api/login`, newData)
                .then(response => {
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('name', response.data.name)
                    
                    this.dispatch("infoToken")
                    router.push('/')
                })
                .catch(error => {
                    context.commit('updateCondition', "Такого пользователя не существует")
                })
            } catch (error) {
                context.commit('updateCondition', 'Ошибка')
            }
        },

        async infoToken(context) {
            const token = localStorage.getItem('token')
            if(token == null) {
                context.commit('updateAutoriztion', [null, false])
            } else {
                try {
                    context.commit('updateAutoriztion', [localStorage.getItem("name"), true])

                    const infoUser = await axios({
                        method: 'get',
                        url: `${config.host}/api/infoByToken`,
                        headers: {'Authorization': token}
                    })
                    context.commit('updateData', infoUser.data.user)
                } catch (error) {
                    context.commit('updateCondition', 'Ошибка')
                }
            }
        },
        async outProfile(context) {
            localStorage.removeItem('token')
            localStorage.removeItem('name')
            context.commit('updateAutoriztion', [null, false])
        }
    },
    getters: {
        allCondition(state) {
            return state.isCondition
        },

        isAutoriztion(state) {
            return state.isAutoriztion
        },

        isData(state) {
            return state.data
        },

        isNav(state) {
            return state.isNav
        }
    }
}