<template>
  <div class="posTemplate">
    <i @click="ChangeModeToUserDelete" v-bind:class="[trashSign]">
      <!-- <span class="trashText">select and delete words</span> -->
    </i>
    <div class="posInput">
      <input
        type="text"
        v-model="userWord"
        class="Input"
        placeholder="Add a word..."
      />
      <i @click="addUserWord" class="fas fa-plus-circle modifyPlusCircle"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "AddOrDeleteWord",
  data() {
    return {
      userWord: "",
      trashSign: "fas fa-trash-alt modifyTrash",
    };
  },
  methods: {
    ...mapActions(["AddUserWord"]),
    ...mapGetters(["GetIsUserDeleting"]),
    ...mapMutations({ ToggleDeletingMode: "MutateDeletingMode" }),
    // map `this.ToggleDeletingMode()` to `this.$store.commit('MutateDeletingMode')`
    addUserWord() {
      this.AddUserWord(this.userWord);
      // clear input text in entry
      this.userWord = "";
    },
    ChangeModeToUserDelete() {
      this.ToggleDeletingMode();
      this.GetIsUserDeleting()
        ? (this.trashSign = "fas fa-sign-out-alt modifyTrash")
        : (this.trashSign = "fas fa-trash-alt modifyTrash");
    },
  },
};
</script>

<style scoped>
.posTemplate {
  padding-top: 15px;
}
.posInput {
  /* margin: 0 auto; */
  /* text-align: center;
  width: fit-content;
  margin: 0 20px;
  margin-top: 20px; */

  margin-top: 20px;
}
.modifyPlusCircle {
  position: absolute;
  font-size: xx-large;
  margin-left: 15px;
  cursor: pointer;
}
.Input {
  height: 30px;
  font-size: 14pt;
}
.modifyTrash {
  /* float: right;
  margin-right: 50px;
  margin-top: 10px;
  cursor: pointer;
  right: 0;
  position: absolute; */

  margin-top: 5px;
  margin-right: 10px;
  cursor: pointer;
  right: 0;
  top: 0;
  position: absolute;
}
.trashText {
  font-size: small;
  font-family: monospace;
  position: absolute;
  right: 0;
  margin-right: 20px;
  margin-top: -15px;
}
</style>
