<template>
  <b-card
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      <strong>Date:</strong> {{ $moment(date).format('MMM Do YY') }}
    </b-card-text>
    <b-card-text>
      <strong>Active:</strong> {{ active }}
    </b-card-text>
    <b-card-text>
      <strong>Confirmed:</strong> {{ confirmed }}
    </b-card-text>
    <b-card-text>
      <strong>Deaths:</strong> {{ deaths }}
    </b-card-text>
    <b-card-text>
      <strong>Recovered:</strong> {{ recovered }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "lastFiveDays",
  props: {
    date: {
      type: String,
      required: true
    },
    active: {
      type: Number
    },
    confirmed: {
      type: Number
    },
    deaths: {
      type: Number
    },
    recovered: {
      type: Number
    }
  },
}
</script>

<style scoped>

</style>
