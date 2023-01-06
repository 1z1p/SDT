<template>
  <div class="news">
    <h2>Новости</h2>
    <div class="container">
        <div
            v-for="items in allNewsFull"
            class="news__inner"
            :key="items"
            >
            <img :src="items.news_image" width="200" height="120" alt="">
            <h3>{{ items.name_news }}</h3>
            <p class="news__url"> {{items.discript_news}} </p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters(["allNewsFull"]),
  methods: mapActions(["newsFullLoading"]),

  async mounted() {
    this.newsFullLoading({
        id: this.$route.params.id
    })
  },

}
</script>

<style scoped>
.news > h2 {
  text-align: center;
}

.news__inner {
  display: grid;
  align-items: flex-start;
  margin: 10px 0px;
}

.news__url {
  margin-left: 5px;
  width: 750px;
  color: #000;
}
</style>
