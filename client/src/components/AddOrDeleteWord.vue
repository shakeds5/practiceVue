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
        v-on:keyup.enter="addUserWord"
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
      if (this.userWord.length != 0) {
        this.AddUserWord(this.userWord);
        this.userWord = ""; // clear input text in entry
      }
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
  margin-top: 20px;
}
.modifyPlusCircle {
  position: absolute;
  font-size: xx-large;
  margin-left: 5px;
  cursor: pointer;
}
.Input {
  height: 30px;
  font-size: 14pt;
}
input[type="text"]:focus {
  outline: none;
  box-shadow: inset 0px 0px 1px 0px black;
}

.modifyTrash {
  /* margin-top: 5px; */
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
  right: 0;
  top: 0;
  position: absolute;
}
/* .trashText {
  font-size: small;
  font-family: monospace;
  position: absolute;
  right: 0;
  margin-right: 20px;
  margin-top: -15px;
} */

/* ///////////////////////////////////////////////////// */

/* portrait tablets, portrait iPad, landscape e-readers,
 landscape 800x480 or 854x480 phones */
@media (min-width: 641px) {
  body,
  html {
    font-size: xx-large;
  }
  .Input {
    font-size: 20pt;
    padding: 20px;
  }
  .modifyPlusCircle {
    font-size: -webkit-xxx-large;
    top: 0;
    margin-top: 32px;
  }
}

/* tablet, landscape iPad, lo-res laptops ands desktops */
@media (min-width: 961px) {
  .Input {
    font-size: 30pt;
    padding: 30px;
  }
  .modifyPlusCircle {
    font-size: -webkit-xxx-large;
    top: 0;
    margin-top: 45px;
  }
}

/* big landscape tablets, laptops,
 and desktops (min-width: 1025px)*/
@media (min-width: 1025px) {
  .Input {
    font-size: 15pt;
    padding: 15px;
  }
  .modifyPlusCircle {
    font-size: xx-large;
    top: 0;
    margin-top: 35px;
  }
}
</style>
