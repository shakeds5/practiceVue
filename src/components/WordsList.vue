<template>
  <div class="WordsListClass">
    <FilterWordsByLevel
      v-on:FilerOption="FilterWords"
      v-on:cleanFilter="cleanFilter"
    />
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
  data() {
    return {
      words: [],
    };
  },
  methods: {
    ...mapActions(["FetchWords"]),
    FilterWords(option) {
      this.words = this.$store.getters.GetWordsByLevel(option.level);
    },
    cleanFilter() {
      this.words = this.$store.getters.GetAllWords;
    },
  },
  // async created (){ also possible
  created() {
    // TODO fix this
    this.FetchWords().then(() => {
      this.words = this.$store.getters.GetAllWords;
    });
  },
};
</script>

<style scoped>
.WordsListClass {
  padding: 15px;
}
</style>
