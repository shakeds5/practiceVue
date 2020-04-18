<template>
  <div class="WordsListClass">
    <FilterWordsByLevel v-on:FilerOption="filterWords" />
    <div v-bind:key="word.id" v-for="word in words">
      <WordsItem
        v-bind:word="word"
        v-bind:isDeleting="isDeleting"
        v-on:deleteWordItem="deleteWordItem"
      />
    </div>
  </div>
</template>

<script>
import WordsItem from "./WordItem.vue";
import FilterWordsByLevel from "./FilterWordsByLevel.vue";
export default {
  name: "WordsList",
  components: { WordsItem, FilterWordsByLevel },
  props: ["words", "isDeleting"],
  // data() {
  //   return {
  //     FilterByLevel: 0,
  //     boolFilterWords: false,
  //   };
  // },
  methods: {
    deleteWordItem(id) {
      this.$emit("deleteWordItem", id);
    },
    filterWords(option) {
      this.$emit("filterWords", option);
      // this.$props.words
      // console.log(option);
      // this.boolFilterWords = !this.boolFilterWords;
      // this.FilterByLevel = option.idx;
    },
  },
};
</script>

<style scoped>
.WordsListClass {
  padding: 15px;
}
</style>
