<template>
    <div class="auth">
        <h2>Авторизация</h2>
        <h3>{{ allCondition }}</h3>
        <form @submit.prevent="submit" class="auth__form">
            <label>E-mail</label>
            <input class="auth__model" v-model="mail" type="text" placeholder="E-mail" required>
            <label>Пароль</label>
            <input class="auth__model" v-model="password" type="password" placeholder="Пароль" autocomplete="on" required>
            <button class="auth__btn">Войти</button>
            <h6>Если нету аккаунта то <router-link class="reg__link" to="/reg">зарегистрируйтесь</router-link></h6>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import router from '../router/index'

export default {
    data() {
        return {
            mail: null,
            password: null
        }
    },

    computed: mapGetters(["allCondition"]),
    methods: {
        ...mapActions(["SignIn"]),
        submit() {
            this.SignIn({
                mail: this.mail,
                password: this.password
            })
            this.mail = this.password = ""
        }
    },

    async mounted() {
        if(this.$store.state.users.isAutoriztion.Auth == true)
            router.push('/profile')
    }
}
</script>

<style scoped>
.auth > h2 {
    text-align: center;
}

.auth__form {
    flex-direction: column;
    display: flex;
    max-width: 350px;
    margin: 0 auto;
}

.auth__model {
    margin: 5px 0px;
    height: 35px;
    font-size: 20px;
    padding-left: 5px;
    outline: none;
    border: 0px;
    border-bottom: 1px solid #000;
}

.auth__btn {
    height: 35px;
    background-color: lightsalmon;
    color: #fff;
    border: 0px;
    font-size: 20px;
    cursor: pointer;
    margin: 5px 0px;
    transition: .3s;
}

.auth__btn:hover {
    background-color: rgb(241, 117, 68);
}

.reg__link {
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid #000;
}

</style>