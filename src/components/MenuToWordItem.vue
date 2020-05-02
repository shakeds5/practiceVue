<template>
  <div>
    <ul
      class="dropdown-menu"
      v-bind:style="display ? 'display:block' : 'display:none'"
    >
      <li
        v-for="(option, level) in this.$store.state.levelOptions"
        :key="level"
      >
        <a
          href="javascript:void(0)"
          @click="updateOption(option)"
          v-bind:style="
            option.level == 1
              ? `text-shadow: 2px 2px 5px ${option.color}`
              : option.level == 2
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
  data() {
    return {
      placeholderText: "Please select a level",
    };
  },
  methods: {
    updateOption(option) {
      this.$emit("updateOption", option);
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

/* portrait tablets, portrait iPad, landscape e-readers, 
landscape 800x480 or 854x480 phones */
@media (min-width: 641px) {
  .dropdown-menu > li {
    font-size: x-large;
  }
}

/* big landscape tablets, laptops,
 and desktops (min-width: 1025px)*/
@media (min-width: 1025px) {
  .dropdown-menu > li {
    font-size: medium;
  }
}
</style>
