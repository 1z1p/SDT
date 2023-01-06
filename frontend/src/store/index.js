import { createStore } from 'vuex'
import users from './modules/users/users'
import news from './modules/news/news'
import test from './modules/test/test'
import traning from './modules/test/traning'
import complete from './modules/test/complete'

export default createStore({
  modules: {
    users,
    news,
    test,
    traning,
    complete
  }
})
