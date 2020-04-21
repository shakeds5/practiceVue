<template>
  <div>
    <img class="VueLogo" alt="Vue logo" src="../assets/logo.png" />
    <AddOrDeleteWord />
    <WordsList v-bind:words="words" />
  </div>
</template>

<script>
// @ is an alias to /src
import AddOrDeleteWord from "@/components/AddOrDeleteWord.vue";
import WordsList from "@/components/WordsList.vue";

import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    AddOrDeleteWord,
    WordsList,
  },
  methods: {
    ...mapActions(["FetchWords"]),
  },
  created() {
    this.FetchWords();
  },
  computed: {
    words() {
      return this.$store.state.words;
    },
  },
};
</script>

<style scoped>
.VueLogo {
  bottom: 0;
  right: 0;
  position: absolute;
  width: 35px;
  margin: 30px;
}
</style>
