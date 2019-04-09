<template>
  <div class="container">
    <p class="header-date">
      São Paulo,&nbsp;
      <span v-if="showInput">
        <input type="date" name="today" id="today" class="form-control date-text"
          v-model="today">
      </span>
      <span v-else>{{ today }}</span>
      <button type="button" class=" btn btn-success" @click="showInput = false"
        v-if="showInput">
        <font-awesome-icon icon="save" /></button>
      <button type="button" class="btn btn-secondary" @click="clear">
        <font-awesome-icon icon="ban" /></button>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      today: new Date(),
      showInput: true
    }
  },
  methods: {
    clear () {
      this.today = ''
      this.showInput = true
    }
  }
}
</script>

<style scoped>
.date-text {
  width: auto;
  display: unset;
}
.header-date {
  text-align: right;
  margin-bottom: 0;
  font-size: 1.2rem;
}
</style>
