<template>
  <div>
    <i @click="openFilterMenu()" class="fas fa-filter filter-modify-icon">
      <ul
        class="filter-menu"
        v-bind:style="displayFilter == true ? 'display:block' : 'display:none'"
      >
        <li v-for="(option, idx) in options" :key="idx">
          <a
            href="javascript:void(0)"
            @click="$emit('FilerOption', option)"
            class="colorOption"
            v-bind:style="`background-color:${option.color}`"
          >
          </a>
        </li>
      </ul>
    </i>
  </div>
</template>

<script>
export default {
  name: "FilterWordsByLevel",
  data: function() {
    return {
      options: [
        { idx: 1, name: "don`t Know", color: "red" },
        { idx: 2, name: "kind of", color: "#ecdc1d" },
        { idx: 3, name: "know", color: "green" },
      ],
      displayFilter: false,
    };
  },
  methods: {
    openFilterMenu() {
      this.displayFilter = !this.displayFilter;
    },
    // updateFilerOption(option) {
    //   console.log(option);
    // },
  },
};
</script>

<style scoped>
.colorOption {
  margin: 5px;
}

.filter-modify-icon {
  top: 0;
  margin-left: 50px;
  margin-top: 25px;
  cursor: pointer;
  left: 0;
  position: absolute;
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
li {
  list-style: none;
}
</style>
