<template>
  <div v-if="topRecovered">
    <b-jumbotron>
      <h4>Day with top recovered cases: {{$moment(topRecovered.Date).format('MMM Do YY')}}</h4>
      <p><strong>Recovered :</strong> {{ topRecovered.Recovered }}</p>
      <p><strong>Confirmed :</strong> {{ topRecovered.Confirmed }}</p>
      <p><strong>Active :</strong> {{ topRecovered.Active }}</p>
      <p><strong>Deaths: </strong>{{ topRecovered.Deaths }}</p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "topRecovered",
  props: {
    topRecovered: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
