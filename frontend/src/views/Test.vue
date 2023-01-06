<template>
    <div class="test__container">
        <h2 class="test__logo">Тест</h2>
        <div v-for="quest in isQuests.length" :key="quest">
            <h3 class="test__quest">{{quest}}. {{isQuests[quest - 1]}}</h3>
            <form class="test__answer" v-for="answer in isAnswers[quest - 1]" :key="answer">
                <input type="radio" v-model="isChoosAnswers[quest - 1]" :value="answer">
                <span>{{answer}}</span>
            </form>
        </div>
        <button class="test__btn" @click.prevent="submit()">Завершить тест</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import router from '../router/index'

export default {

    data() {
        return {
            isChoosAnswers: []
        }
    },

    computed: mapGetters(["isQuests", "isAnswers", "isResult"]),
    methods: {
        ...mapActions(["TestLoading", "FinishTest"]),
        submit() {
            this.FinishTest({
                id: this.$route.params.id,
                name_test: this.$store.state.test.isNameTest,
                name: localStorage.getItem("name"),
                result: this.isChoosAnswers
            }) 
            router.push('/complete')
        }
    },

    async mounted() {
        if(this.$store.state.users.isAutoriztion.Auth == false)
            router.push('/auth')
        this.TestLoading({
            id: this.$route.params.id
        })
    }
}
</script>

<style scoped>

.test__container {
    max-width: 850px;
    margin: 0 auto;
}

.test__logo {
    text-align: center;
}

.test__answer {
    margin-left: 20px;
}

.test__answer > input {
    margin-right: 10px;
}

.test__btn {
    background-color: lightsalmon;
    padding: 10px 20px;
    color: #fff;
    border: 0px;
    cursor: pointer;
    font-size: 18px;
    margin: 30px 0px;
}

/* checkbox */
input[type=radio] {
    cursor: pointer;
}

input[type=radio]:after, input[type=radio]:checked:after {
    width: 15px;
    height: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 1px solid #000;
}

input[type=radio]:checked:after {
    background-color: lightsalmon;
}

input[type=radio]:after {
    background-color: #fff;
}
/* end checkbox */
</style>