<template>
    <div class="profile">
        <div class="container">
            <div class="profile__data" :key="isData">
                <h2>Данные</h2>
                <h4>Имя: {{ isData.name }}</h4>
                <h4>Email: {{ isData.mail }}</h4>
                <h4>Телефон: {{ isData.number }}</h4>
                <h4>Пароль: *****</h4>
                <button @click.prevent="submit()" class="profile__btn">Выйти</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import router from '../router/index'

export default {
    computed: mapGetters(["isData"]),
    methods: {
        ...mapActions(["outProfile"]),
        submit() {
            this.outProfile()
            router.push('/')
        }
    },
    async mounted() {
        if(this.$store.state.users.isAutoriztion.Auth == false)
            router.push('/auth')
    },
}
</script>

<style scoped>
.profile__btn {
    background-color: lightsalmon;
    border: 0px;
    cursor: pointer;
    padding: 6px 20px;
    color: #fff;
}
</style>
