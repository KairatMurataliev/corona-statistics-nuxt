export default {
  async fetchCountriesList({commit}) {
    try {
      const response = await this.$axios.get('https://api.covid19api.com/countries');
      commit('setCountriesList', response.data);
    } catch (e) {
      console.log(e);
    }
  },
  async fetchCountryBySlug({commit}, slug) {
    try {
      const response = await this.$axios.get(`https://api.covid19api.com/total/dayone/country/${slug}`);
      const data = response.data.slice(Math.max(response.data.length - 5, 1));
      const top = data.reduce((dayA,dayB) => dayA.Recovered > dayB.Recovered ? dayA : dayB);
      commit('setOneCountry', data);
      commit('setTopRecovered', top)
    } catch (e) {
      console.log(e);
    }
  }
}
