<template>
  <div>
    <b-row>
      <select-country :options="countriesList" @getData="fetchCountryBySlug"/>
    </b-row>

    <h2>{{ topRecovered && topRecovered.Country}}</h2>

    <b-row>
      <b-col>
        <last-five-days
          v-for="day of oneCountry"
          :date="day.Date"
          :active="day.Active"
          :confirmed="day.Confirmed"
          :deaths="day.Deaths"
          :recovered="day.Recovered"
        />
      </b-col>

      <b-col>
        <top-recovered v-if="topRecovered" :topRecovered="topRecovered"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';
import SelectCountry from '../components/select-country/selectCountry'

export default {
  mounted() {
    this.fetchCountriesList()
  },
  computed: mapState(['countriesList', 'topRecovered', 'oneCountry']),
  methods: {
    ...mapActions(['fetchCountriesList']), ...mapMutations(['setCountriesList']),
    fetchCountryBySlug(slug) {
      this.$store.dispatch('fetchCountryBySlug', slug);
    }
  },
  components: {
    SelectCountry
  }
}
</script>

<style scoped>

</style>
