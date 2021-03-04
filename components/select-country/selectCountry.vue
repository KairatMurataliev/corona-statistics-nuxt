<template>
  <div>
    <h4>Please select country: </h4>
    <b-form-select v-model="selected" @change="onChange($event)">
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
