<template>
    <div class="traning">
        <h2>Обучение</h2>
        <div class="container">
            <div v-for="nameItem in allNameTest" class="traning__inner" :key="nameItem.id">
                <router-link :to="'/test/' + nameItem.id" class="traning__test">{{ nameItem.name_test }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters(["allNameTest"]),
  methods: mapActions(["nameTestLoading"]),
  async mounted() {
    this.nameTestLoading()
  },
}
</script>

<style scoped>
.traning > h2 {
    text-align: center;
}

.traning__inner {
    display: grid;
}

.traning__test {
    border: 1px solid lightsalmon;
    font-size: 24px;
    margin: 5px 0px;
    padding: 12px 5px;
    text-decoration: none;
    color: #000;
}
</style>