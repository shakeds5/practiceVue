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
  margin-top: 10px;
  margin-right: 40px;
  cursor: pointer;
  right: 0;
  top: 0;
  position: absolute;
}
.filter-menu {
  right: 0;
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

/* portrait tablets, portrait iPad, landscape e-readers,
landscape 800x480 or 854x480 phones */
@media (min-width: 641px) {
  .filter-menu > li > a {
    padding: 20px 50px;
  }
  #cleanFilter {
    font-size: x-large;
  }
  .filter-modify-icon {
    margin-right: 55px;
  }
}

/* big landscape tablets, laptops,
 and desktops (min-width: 1025px)*/
@media (min-width: 1025px) {
  .filter-menu > li > a {
    padding: 15px 30px;
  }
  #cleanFilter {
    font-size: large;
  }
}
</style>
