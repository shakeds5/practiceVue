<template>
  <div class="WordsListClass">
    <FilterWordsByLevel v-on:FilerOption="FilterWords" />
    <div v-bind:key="word.id" v-for="word in words">
      <WordsItem v-bind:word="word" />
    </div>
  </div>
</template>

<script>
import WordsItem from "./WordItem.vue";
import FilterWordsByLevel from "./FilterWordsByLevel.vue";

import { mapActions } from "vuex";

export default {
  name: "WordsList",
  components: { WordsItem, FilterWordsByLevel },
  props: ["words"],
  methods: {
    ...mapActions(["FilterWords"]),
  },
};
</script>

<style scoped>
.WordsListClass {
  padding: 15px;
}
</style>
