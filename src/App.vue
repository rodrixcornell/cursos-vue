<template>
  <div>
    <navbar />
    <form-cadastro />

    <div class="container">
      <painel-cursos class="mt-3" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import FormCadastro from './components/FormCadastro'
import PainelCursos from './components/PainelCursos'

export default {
  name: 'App',
  components: {
    Navbar,
    FormCadastro,
    PainelCursos
  },
  data () {
    return {
    }
  }
}
</script>
