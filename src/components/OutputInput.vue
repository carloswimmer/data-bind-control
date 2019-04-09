<template>
  <div>
    <div class="container">
      <h1><font-awesome-icon icon="address-card" /></h1>
      <h2>{{ person.name }}</h2>
      <h2>{{ person.email }}</h2>
    </div>
    <div class="container">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Name</span>
        </div>
        <input type="text" class="form-control" v-model="personInput.name"/>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">E-mail</span>
        </div>
        <input type="text" class="form-control" v-model="personInput.email"/>
      </div>
      <div class="button-group">
        <button type="button" class=" btn btn-secondary" @click="cancel">
          <font-awesome-icon icon="ban" /> CANCEL</button>
        <button type="button" class=" btn btn-success" @click="save">
          <font-awesome-icon icon="save" /> SAVE</button>
        <button type="button" class=" btn btn-primary" @click="edit">
          <font-awesome-icon icon="edit" /> EDIT</button>
      </div>
    </div>
      <button type="button" class=" btn btn-secondary" @click="withComponent">
          <font-awesome-icon icon="star" /> USING COMPONENT</button>
  </div>
</template>

<script>
import Person from '@/draft/person.json'

export default {
  name: 'OutputInput',
  data () {
    return {
      person: {
        name: '',
        email: ''
      },
      personInput: {}
    }
  },
  methods: {
    edit () {
      this.personInput = JSON.parse(JSON.stringify(this.person))
    },
    save () {
      this.person = this.personInput
      sessionStorage.setItem('person', JSON.stringify(this.person))
      this.personInput = {}
    },
    cancel () {
      this.personInput = {}
    },
    withComponent () {
      this.$router.push({ name: 'Output' })
    }
  },
  created () {
    this.person = Person
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
h2 {
  color: #62667c;
}
.container {
  border: 1px solid #cccccc;
  border-radius: 6px;
  padding: 20px;
  margin: 50px auto 30px auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button-group {
  padding-top: 20px;
  display: flex;
  justify-content: space-evenly;
}
</style>
