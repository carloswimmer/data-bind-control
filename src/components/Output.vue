<template>
  <div>
    <header-date></header-date>
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
import HeaderDate from '@/components/HeaderDate'
import PersonJson from '@/draft/person.json'

export default {
  name: 'OutputInput',
  components: {
    InputPannel, HeaderDate
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
