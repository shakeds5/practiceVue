<template>
  <div>
    <i @click="openFilterMenu()" class="fas fa-filter filter-modify-icon">
      <ul
        class="filter-menu"
        v-bind:style="displayFilter == true ? 'display:block' : 'display:none'"
      >
        <li
          v-for="(option, level) in this.$store.state.levelOptions"
          :key="level"
        >
          <a
            @click="$emit('FilerOption', option)"
            href="javascript:void(0)"
            class="colorOption"
            v-bind:style="`background-color:${option.color}`"
          >
          </a>
        </li>
        <li id="cleanFilter" name="cleanFilter" @click="$emit('cleanFilter')">
          show all
        </li>
      </ul>
    </i>
  </div>
</template>

<script>
export default {
  name: "FilterWordsByLevel",
  data() {
    return {
      displayFilter: false,
    };
  },
  methods: {
    openFilterMenu() {
      this.displayFilter = !this.displayFilter;
    },
  },
};
</script>
<style scoped>
#cleanFilter {
  clear: both;
  font-weight: normal;
  line-height: 1.6;
  color: #333333;
  white-space: nowrap;
  text-align: center;
  font-family: monospace;
}
.colorOption {
  margin: 5px;
}
.filter-modify-icon {
  top: 0;
  margin-top: 25px;
  cursor: pointer;
  right: 0;
  position: absolute;
  margin-right: 130px;
}
.filter-menu {
  position: absolute;
  z-index: 1000;
  min-width: fit-content;
  padding: 5px;
  margin: 2px 10px 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}
.filter-menu > li > a {
  padding: 10px 30px;
  display: block;
  clear: both;
  font-weight: normal;
  line-height: 1.6;
  color: #333333;
  white-space: nowrap;
  text-decoration: none;
}
.filter-menu > li {
  overflow: hidden;
  width: 100%;
  position: relative;
  margin: 0;
}
.filter-menu > li:hover {
  background-color: #7c7c7c;
}
li {
  list-style: none;
}
</style>
