import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    words: [],
    isUserDeleting: false,
  },
  mutations: {
    MutateFetchWords: (state, words) => (state.words = words),
    MutateDeleteWord: (state, id) =>
      (state.words = state.words.filter((word) => word.id !== id)),
    MutateDeletingMode: (state) =>
      (state.isUserDeleting = !state.isUserDeleting),
    MutateAddUserWord: (state, word) => state.words.unshift(word),
  },
  actions: {
    FetchWords({ commit }) {
      // await get
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
      // await delete

      commit("MutateDeleteWord", id);
    },

    ToggleDeletingMode({ commit }) {
      commit("MutateDeletingMode");
    },

    AddUserWord({ commit }, word) {
      // await post
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
  },
  modules: {},
});
