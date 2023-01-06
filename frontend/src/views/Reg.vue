<template>
    <div class="reg">
        <h2>Регистрация</h2>
        <h3>{{ allCondition }}</h3>
        <form @submit.prevent="submit" class="reg__form">
            <label>Имя</label>
            <input class="reg__model" v-model="name" type="text" placeholder="Имя" required>
            <label>Телефон</label>
            <input class="reg__model" v-model="number" type="text" placeholder="Телефон" required>
            <label>E-mail</label>
            <input class="reg__model" v-model="mail" type="text" placeholder="E-mail" required>
            <label>Пароль</label>
            <input class="reg__model" v-model="password" type="password" placeholder="Пароль" autocomplete="on" required>
            <button type="submit" class="reg__btn">Зарегистрироваться</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import router from '../router/index'

export default {
    data() {
        return {
            name: null,
            number: null,
            mail: null,
            password: null
        }
    },
    computed: mapGetters(["allCondition"]),
    methods: {
        ...mapActions(["SignUp"]),
        submit() {
            this.SignUp({
                name: this.name,
                number: this.number,
                mail: this.mail,
                password: this.password
            })
            this.name = this.number = this.mail = this.password = ""
        }
    },

    async mounted() {
        if(this.$store.state.users.isAutoriztion.Auth == true)
            router.push('/profile')
    }
}
</script>

<style scoped>
.reg > h2 {
    text-align: center;
}

.reg > h3 {
    text-align: center;
}

.reg__form {
    flex-direction: column;
    display: flex;
    max-width: 350px;
    margin: 0 auto;
}

.reg__model {
    margin: 5px 0px;
    height: 35px;
    font-size: 20px;
    padding-left: 5px;
    outline: none;
    border: 0px;
    border-bottom: 1px solid #000;
}

.reg__btn {
    height: 35px;
    background-color: lightsalmon;
    color: #fff;
    border: 0px;
    font-size: 20px;
    cursor: pointer;
    margin: 5px 0px;
    transition: .3s;
}

.reg__btn:hover {
    background-color: rgb(241, 117, 68);
}

</style>