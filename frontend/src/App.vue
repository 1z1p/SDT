<template>
  <header>
    <div class="container">
      <div class="header__inner">
        <h1 class="header__logo"><router-link class="header__link" to="/">SDT</router-link></h1>
        <div class="header__nav">
          <router-link class="header__link link__central" to="/traning">Обучение</router-link>
          <router-link class="header__link link__central" to="/news">Новости</router-link>
        </div>
        <div class="header__nav">
          <router-link 
            v-for="nav in isNav"
            :to="nav.path"
            :key="nav.path"
            class="header__link header__auth" 
          ><span v-if="nav.auth === isAutoriztion.Auth">{{nav.title}}</span></router-link>

          <router-link v-if="isAutoriztion.Auth" class="header__link header__auth" to="/profile">
            <span>{{ isAutoriztion.isName }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <router-view/>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: mapGetters(["allCondition", "isData", "isNav", "isAutoriztion"]),
  methods: mapActions(["infoToken"]),
    async mounted() {
        this.infoToken()
    },
}
</script>

<style>
body {
  font-family: monospace;
  font-size: 20px;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 5px;
}

</style>

<style scoped>
.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__link {
  margin: 0px 10px;
  text-decoration: none;
  color: #000;
}

.link__central {
  border-bottom: 2px solid #fff;
  transition: .3s;
}

.link__central:hover {
  border-bottom: 2px solid lightsalmon;
}

.header__auth > span {
  background-color: lightsalmon;
  padding: 6px 20px;
  color: #fff;
}

.header__username {
  text-decoration: none;
  color: #fff;
}
</style>
