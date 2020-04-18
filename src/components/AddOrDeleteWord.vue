<template>
  <div>
    <i @click="deleteWords" v-bind:class="[trashSign]">
      <span class="trashText">select and delete words</span>
    </i>
    <div class="pos">
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
export default {
  name: "AddOrDeleteWord",
  data() {
    return {
      userWord: "",
      trashSign: "fas fa-trash-alt modifyTrash",
      isDeleting: false,
    };
  },
  methods: {
    addUserWord() {
      // Send up to parent
      this.$emit("SignalFunctionAddWord", this.userWord);

      // clear input text in entry
      this.userWord = "";
    },
    deleteWords() {
      this.isDeleting = !this.isDeleting;
      this.$emit("isDeleting");
      // change all dots to delete sign if trash was clicked
      if (this.isDeleting) {
        this.trashSign = "fas fa-sign-out-alt modifyTrash";
      } else {
        this.trashSign = "fas fa-trash-alt modifyTrash";
      }
    },
  },
};
</script>

<style scoped>
.pos {
  margin: 0 auto;
  text-align: center;
  width: fit-content;
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
  float: right;
  margin-right: 50px;
  margin-top: 10px;
  cursor: pointer;
  right: 0;
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
