import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    words: [],
    isUserDeleting: false,
    levelOptions: [
      { level: 1, name: "don`t Know", color: "red" },
      { level: 2, name: "kind of", color: "#ecdc1d" },
      { level: 3, name: "know", color: "green" },
    ],
  },
  mutations: {
    MutateFetchWords: (state, words) => (state.words = words),
    MutateDeleteWord: (state, id) => {
      state.words = state.words.filter((word) => word.id !== id);
      console.log(state.words);
    },
    // MutateDeleteWord need to change TODO ?
    MutateDeletingMode: (state) =>
      (state.isUserDeleting = !state.isUserDeleting),
    MutateAddUserWord: (state, word) => state.words.unshift(word),
  },
  actions: {
    FetchWords({ commit }) {
      // await get TODO
      const Demo = [
        {
          id: 0,
          searchingValue: "word2",
          definition: "none",
          level: 2,
        },
        {
          id: 1,
          searchingValue: "word",
          definition: "none",
          level: 1,
        },
      ];
      commit("MutateFetchWords", Demo);
    },

    DeleteWord({ commit }, id) {
      // await delete TODO
      console.log("MutateDeleteWord", id);
      commit("MutateDeleteWord", id);
    },

    AddUserWord({ commit }, word) {
      // await post TODO
      let wordToAdd = {
        // ++ Increment didnt work
        id: Math.max.apply(
          Math,
          this.state.words.map(function(obj) {
            return obj.id + 1;
          })
        ),
        searchingValue: word,
        definition: "none",
        level: 2,
      };
      commit("MutateAddUserWord", wordToAdd);
    },
  },
  getters: {
    GetAllWords: (state) => state.words,
    GetIsUserDeleting: (state) => state.isUserDeleting,
    GetWordsByLevel: (state) => (level) => {
      return state.words.filter((word) => word.level === level);
    },
  },
  modules: {},
});
