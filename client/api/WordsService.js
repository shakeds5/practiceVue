import axios from "axios";

const url = "http://localhost:5000/api/words/";

class WordsService {
  static getWords() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }

  static insertWordObj(obj) {
    return axios.post(url, obj);
  }

  static deleteWordObj(id) {
    return axios.delete(`${url}${id}`);
  }

  static updateWordLevel(id, level) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}${id}`, { level: level }).then(
        (res) => {
          resolve(res.status);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}

export default WordsService;
