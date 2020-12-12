<template>
  <div>
    <form @submit.prevent="salvarForm" method="post">
      <input type="text" v-model="nome" autocomplete="off">
      <b-button type="submit" variant="success">Salvar</b-button>
      <b-button variant="danger" @click="mostrarNome">Mostrar Nome</b-button>
    </form>

    <h1>Nome: {{ nome }}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      nome: ''
    }
  },
  methods: {
    salvarForm () {
      alert(this.nome)
    },
    mostrarNome () {
      alert(`o nome digitado é: ${this.nome}`)
    }
  }
}
</script>