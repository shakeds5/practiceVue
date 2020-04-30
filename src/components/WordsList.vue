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
  // async await syntax is also possible
  created() {
    // TODO FetchWords is not async
    this.FetchWords().then(() => {
      this.words = this.$store.getters.GetAllWords;
    });
    this.$store.subscribe((mutation) => {
      if (mutation.type == "MutateDeleteWord") {
        this.words = this.$store.getters.GetAllWords;
        // mutation.payload will give the word's id,
        // can get state as second parameter
      }
    });
  },
  // computed: {
  //   words: {
  //     get: function() {
  //       return this.displayWords;
  //     },
  //     set: function(v) {
  //       this.displayWords = v;
  //     },
  //   },
  // },
};
</script>

<style scoped>
.WordsListClass {
  padding: 15px;
}
/* 768px for tablet 1000px for computer */
@media only screen and (min-width: 768px) {
}
</style>
