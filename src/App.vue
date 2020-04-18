<template>
  <div id="app">
    <AddOrDeleteWord
      v-on:isDeleting="ChangeDotsToDeleteSign"
      v-on:SignalFunctionAddWord="AddWord"
    />
    <WordsList
      v-bind:words="words"
      v-bind:isDeleting="isDeleting"
      v-on:deleteWordItem="deleteWordItem"
      v-on:filterWords="filterWords"
    />
  </div>
</template>

<script>
import WordsList from "./components/WordsList.vue";
import AddOrDeleteWord from "./components/AddOrDeleteWord.vue";
// ToDO: create DB, add and delete words from DB
// add filter, API to definition
export default {
  name: "App",
  components: {
    WordsList,
    AddOrDeleteWord,
  },
  data() {
    return {
      words: [
        {
          id: 0,
          searchingValue: "word2",
          definition: "none",
          level: 2,
        },
        {
          id: 1,
          searchingValue: "word",
          definition: "none",
          level: 1,
        },
      ],
      isDeleting: false,
    };
  },
  methods: {
    AddWord(word) {
      var lastId = this.words[this.words.length - 1];
      var currentId = lastId === undefined ? 0 : lastId.id + 1;
      const wordToAdd = {
        id: currentId,
        searchingValue: word,
        definition: "none",
        level: 2,
        // [1: dont know (red), 2: familiar (yellow), 3: master (green)]
      };
      this.words.push(wordToAdd);
    },
    ChangeDotsToDeleteSign() {
      this.isDeleting = !this.isDeleting;
    },
    deleteWordItem(id) {
      this.words = this.words.filter((word) => {
        return id == word.level;
      });
    },
    filterWords(option) {
      this.words = this.words.filter((word) => {
        return option.idx == word.level;
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 15px;
  margin: 0;
}
</style>
