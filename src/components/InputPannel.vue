<template>
  <div>
    <div class="container">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Name</span>
        </div>
        <input type="text" class="form-control" v-model="someone.name"/>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">E-mail</span>
        </div>
        <input type="text" class="form-control" v-model="someone.email"/>
      </div>
      <div class="button-group">
        <button type="button" class=" btn btn-secondary" @click="clean">
          <font-awesome-icon icon="ban" /> CANCEL</button>
        <button type="button" class=" btn btn-success" @click="record">
          <font-awesome-icon icon="save" /> SAVE</button>
        <button type="button" class=" btn btn-primary" @click="change">
          <font-awesome-icon icon="edit" /> EDIT</button>
      </div>
    </div>
  </div>
</template>

<script>
import Person from '@/domain/Person.js'

export default {
  name: 'OutputInput',
  props: {
    someone: {
      type: Object
    }
  },
  methods: {
    change () {
      this.$emit('getPerson')
    },
    record () {
      this.$emit('recordPerson', this.someone)
    },
    clean () {
      this.$emit('cleanPerson')
    }
  },
  created () {
    this.someone = new Person()
  }
}
</script>
