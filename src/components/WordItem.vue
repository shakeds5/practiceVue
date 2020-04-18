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
        isDeleting
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
export default {
  name: "WordItem",
  props: ["word", "isDeleting"],
  components: { MenuToWordItem },
  data() {
    return {
      setMenuDisplay: false,
    };
  },
  methods: {
    OpenLevelsMenuOrDelete() {
      // if we add this ref="LevelsMenu" to prop we can acsses the component
      // method like so- this.$refs.LevelsMenu.setDisplay(true);

      this.setMenuDisplay = !this.setMenuDisplay;

      if (this.isDeleting) {
        this.setMenuDisplay = false;
        this.$emit("deleteWordItem", this.$props.word.id);
      }
    },
    updateOption(option) {
      // change the color based on level
      this.word.level = option.idx;
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
