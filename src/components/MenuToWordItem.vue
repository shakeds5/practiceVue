<template>
  <div>
    <ul
      class="dropdown-menu"
      v-bind:style="display == true ? 'display:block' : 'display:none'"
    >
      <li v-for="(option, idx) in options" :key="idx">
        <a
          href="javascript:void(0)"
          @click="updateOption(option)"
          v-bind:style="
            option.idx == 1
              ? `text-shadow: 2px 2px 5px ${option.color}`
              : option.idx == 2
              ? `text-shadow: 2px 2px 5px ${option.color}`
              : `text-shadow: 2px 2px 5px ${option.color}`
          "
        >
          {{ option.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuToWordItem",
  props: ["display"],
  data: function() {
    return {
      selectedOption: "",
      placeholderText: "Please select a level",
      options: [
        { idx: 1, name: "don`t Know", color: "red" },
        { idx: 2, name: "kind of", color: "#ecdc1d" },
        { idx: 3, name: "know", color: "green" },
      ],
    };
  },
  methods: {
    updateOption(option) {
      this.selectedOption = option;
      this.$emit("updateOption", this.selectedOption);
    },
  },
};
</script>

<style scoped>
.dropdown-menu {
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 1000;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}
.dropdown-menu > li > a {
  padding: 10px 30px;
  display: block;
  clear: both;
  font-weight: normal;
  line-height: 1.6;
  color: #333333;
  white-space: nowrap;
  text-decoration: none;
}
.dropdown-menu > li > a:hover {
  background: #efefef;
  color: #409fcb;
}
.dropdown-menu > li {
  overflow: hidden;
  width: 100%;
  position: relative;
  margin: 0;
}
li {
  list-style: none;
}
</style>
