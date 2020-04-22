<template>
  <div
    class="word-item"
    v-bind:style="
      word.level == 1
        ? 'border-right-color:red'
        : word.level == 2
        ? 'border-right-color:#ecdc1d'
        : 'border-right-color:green'
    "
  >
    <div class="user-word-searchingValue">
      {{ word.searchingValue }}
    </div>
    <div class="user-word-definition">
      {{ word.definition }}
    </div>

    <!-- 3 dots that with click open options to change colors-->
    <i
      @click="OpenLevelsMenuOrDelete"
      v-bind:class="
        this.$store.getters.GetIsUserDeleting
          ? 'fas fa-times-circle Dots-modify'
          : 'fas fa-ellipsis-v Dots-modify'
      "
    >
      <MenuToWordItem
        v-bind:display="setMenuDisplay"
        v-on:updateOption="updateOption"
      />
    </i>
  </div>
</template>

<script>
import MenuToWordItem from "./MenuToWordItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "WordItem",
  props: ["word"],
  components: { MenuToWordItem },
  data() {
    return {
      setMenuDisplay: false,
    };
  },
  methods: {
    ...mapActions(["DeleteWord"]),
    ...mapGetters(["GetIsUserDeleting"]),

    OpenLevelsMenuOrDelete() {
      this.setMenuDisplay = !this.setMenuDisplay;
      if (this.GetIsUserDeleting()) {
        this.setMenuDisplay = false;
        this.DeleteWord(this.$props.word.id);
      }
    },
    updateOption(option) {
      // change the item color based on its level
      this.word.level = option.level;
    },
  },
};
</script>

<style scoped>
.word-item {
  display: flex;
  border-style: solid;
  border-color: #dec359;
  border-width: thin;
  border-bottom-style: hidden;
  padding: 5px;
  border-right-width: 7px;
  border-right-color: green;
}
.user-word-searchingValue {
  padding: 5px;
  border-right-style: solid;
  border-color: #72716c;
  border-width: thin;
  padding-right: 15px;
}
.user-word-definition {
  padding: 5px;
  padding-left: 15px;
}
.Dots-modify {
  padding: 5px;
  align-self: flex-end;
  position: absolute;
  right: 30px;
  cursor: pointer;
}
</style>
