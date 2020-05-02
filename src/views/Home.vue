<template>
  <div>
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
