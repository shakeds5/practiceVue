<template>
  <div>
    <img class="VueLogo" alt="Vue logo" src="../assets/logo.png" />
    <AddOrDeleteWord />
    <WordsList />
  </div>
</template>

<script>
// @ is an alias to /src
import AddOrDeleteWord from "@/components/AddOrDeleteWord.vue";
import WordsList from "@/components/WordsList.vue";

export default {
  name: "Home",
  components: {
    AddOrDeleteWord,
    WordsList,
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
