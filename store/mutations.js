export default {
  setCountriesList(state, payload) {
    state.countriesList = payload;
  },
  setOneCountry(state, payload) {
    state.oneCountry = payload
  },
  setTopRecovered(state, payload) {
    state.topRecovered = payload;
  }
}
