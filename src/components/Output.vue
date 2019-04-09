<template>
  <div>
    <div class="container">
      <h1><font-awesome-icon icon="address-card" /></h1>
      <h2>{{ person.name }}</h2>
      <h2>{{ person.email }}</h2>
    </div>
    <input-pannel
      :someone='personOutput'
      @getPerson='edit'
      @cleanPerson='cancel'
      @recordPerson='save'>
    </input-pannel>
  </div>
</template>

<script>
import Person from '@/domain/Person'
import InputPannel from '@/components/InputPannel'
import PersonJson from '@/draft/person.json'

export default {
  name: 'OutputInput',
  components: {
    InputPannel
  },
  data () {
    return {
      person: new Person(),
      personOutput: new Person()
    }
  },
  methods: {
    edit () {
      this.personOutput = JSON.parse(JSON.stringify(this.person))
    },
    save (someone) {
      this.person = someone
      sessionStorage.setItem('person', JSON.stringify(this.person))
      this.personOutput = new Person()
    },
    cancel () {
      this.personOutput = new Person()
    },
    getPerson () {
      this.person = JSON.parse(sessionStorage.getItem('person'))
      if (this.person === null) this.person = PersonJson
    }
  },
  created () {
    this.getPerson()
  }
}
</script>

<style>
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
  margin-top: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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
