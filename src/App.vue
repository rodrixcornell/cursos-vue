<template>
  <div>
    <navbar />
    <form-cadastro />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import FormCadastro from './components/FormCadastro'

export default {
  name: 'App',
  components: {
    Navbar,
    FormCadastro
  },
  data () {
    return {
    }
  }
}
</script>
