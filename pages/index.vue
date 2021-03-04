<template>
  <div>
    <SelectCountry :options="countriesList" @getData="fetchCountryBySlug"/>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';
import SelectCountry from '../components/SelectCountry/selectCountry'

export default {
  mounted() {
    this.fetchCountriesList()
  },
  computed: mapState(['countriesList']),
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

<style>

</style>
