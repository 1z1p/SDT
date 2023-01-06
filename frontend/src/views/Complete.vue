<template>
    <div class="complete__container">
        <h2 class="complete__result">{{isStatus}}</h2>
        <div class="complete__inner">
            <table>
                <thead>
                    <tr>
                        <th>Число вопросов</th>
                        <th v-for="index in isResult.length" class="complete__quest" :key="index">{{ index }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ответы</td>
                        <td 
                            v-for="item in isResult.length" 
                            :key="item" 
                            :class="isResult[item - 1] === 1 ? 'primary' : 'accent' && isResult[item - 1] === 0 ? 'primary__red' : 'accent2'"
                            >{{isResult[item - 1]}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <router-link to="/traning" class="complete__btn">
            <span>Назад к обучению</span>
        </router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import router from '../router/index'

export default {
    computed: mapGetters(["isStatus","isResult"]),
    async mounted() {
        if(this.$store.state.users.isAutoriztion.Auth == false)
            router.push('/auth')
    },
}
</script>

<style scoped>
.complete__container {
    max-width: 850px;
    margin: 0 auto;
}

.complete__inner {
    display: flex;
    justify-content: center;
}

.complete__result {
    text-align: center;
    color: lightcoral;
}

.complete__btn {
    background-color: lightsalmon;
    padding: 6px 20px;
    color: #fff;
    border: 0px;
    cursor: pointer;
    font-size: 18px;
    display: flex;
    justify-content: center;
    max-width: 200px;
    margin: 0 auto;
    text-decoration: none;
}

/* table */
table {
    margin: 15px 0px;
    text-align: center;
}
th, td {
    border: 1px solid #000;
}
td {
    padding: 0px 5px;
}

.primary {
    background: lightgreen;
}
.primary__red {
    background: lightcoral;
}

/* end table */
</style>