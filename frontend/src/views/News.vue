<template>
  <div class="news">
    <h2>Новости</h2>
    <div class="container">
      <div
          v-for="items in allNews"
          class="news__inner"
          :key="items"
          >
          <img :src="items.news_image" width="200" height="120" alt="">
          <router-link class="news__url" :to="'/new/' + items.id"> {{items.name_news}} </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters(["allNews"]),
  methods: mapActions(["newsLoading"]),
  async mounted() {
    this.newsLoading()
  },

}
</script>

<style scoped>
.news > h2 {
  text-align: center;
}

.news__inner {
  display: flex;
  align-items: flex-start;
  margin: 10px 0px;
}

.news__url {
  margin-left: 5px;
  width: 550px;
  color: #000;
}
</style>
