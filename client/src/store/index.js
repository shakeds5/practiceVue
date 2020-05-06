import Vue from "vue";
import Vuex from "vuex";
import WordsService from "../../api/WordsService";

Vue.use(Vuex);

const state = {
  words: [],
  isUserDeleting: false,
  levelOptions: [
    { level: 1, name: "don`t Know", color: "red" },
    { level: 2, name: "kind of", color: "#ecdc1d" },
    { level: 3, name: "know", color: "green" },
  ],
};

const mutations = {
  MutateFetchWords: (state, words) => (state.words = words),
  MutateDeleteWord: (state, _id) =>
    (state.words = state.words.filter((word) => word._id !== _id)),
  MutateDeletingMode: (state) => (state.isUserDeleting = !state.isUserDeleting),
  MutateAddUserWord: (state, word) => state.words.unshift(word),
  MutateUpdateWordLevel: (state, updatedWord) => {
    state.words.forEach((word) => {
      if (word._id == updatedWord._id) {
        word.level = updatedWord.level;
        return;
      }
    });
  },
};

const actions = {
  async FetchWords({ commit }) {
    try {
      const words = await WordsService.getWords();
      commit("MutateFetchWords", words);
    } catch (error) {
      alert("somthing went worng! refresh and try again");
    }
  },

  async DeleteWord({ commit }, _id) {
    try {
      await WordsService.deleteWordObj(_id);
      commit("MutateDeleteWord", _id);
    } catch (error) {
      alert("somthing went worng! refresh and try again");
    }
  },

  async AddUserWord({ commit }, word) {
    // TODO definition
    try {
      let WordDefinition = "";
      try {
        WordDefinition = await WordsService.GetWordDefinition(word);
      } catch (error) {
        WordDefinition = "could not find definition";
      }
      let wordToAdd = {
        searchingValue: word,
        definition: WordDefinition,
        level: 1,
      };
      let insertWordId = await WordsService.insertWordObj(wordToAdd);
      wordToAdd._id = insertWordId;
      commit("MutateAddUserWord", wordToAdd);
    } catch (error) {
      alert("somthing went worng! refresh and try again");
    }
  },
};

const getters = {
  GetAllWords: (state) => state.words,
  GetIsUserDeleting: (state) => state.isUserDeleting,
  GetWordsByLevel: (state) => (level) => {
    return state.words.filter((word) => word.level === level);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
