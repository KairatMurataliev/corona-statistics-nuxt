<template>
  <div>
    <b-form-select v-model="selected" @change="onChange($event)">
      <option value="kyrgyzstan" selected>Kyrgyzstan</option>
      <option
        v-for="option of options"
        :value="option.Slug"
      >
        {{option.Country}}
      </option>
    </b-form-select>
  </div>
</template>

<script>
export default {
  name: "selectCountry",
  data() {
    return {
      selected: null
    }
  },
  props: {
    options: {
      type: Array,
    }
  },
  methods: {
    onChange(event) {
      this.$emit('getData', event)
    }
  }
}
</script>

<style scoped>

</style>
