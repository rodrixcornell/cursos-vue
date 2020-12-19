<template>
  <div class="row">
    <div v-for="c in cursos" :key="c.id">
       <b-card
        :title="c.nome"
        :img-src="`data:image/jpeg;base64,${c.capa}`"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>{{ c.descricao }}</b-card-text>

        <b-button :href="c.url" variant="primary">Go {{ c.nome }}</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'PainelCursos',
  data () {
    return {
    }
  },
  mounted () {
    Axios.get('http://laravel-vue-new.net/api/cursos')
      .then(({ data }) => {
        console.log(data)
        this.$store.commit('definirCursos', data)
        // this.$swal({
        //   icon: 'success',
        //   title: 'Sucesso',
        //   text: 'Curso cadastrado com sucesso'
        // })
      })
      .catch(( err ) => {
        console.log(err)
        this.$swal({
          icon: 'error',
          title: 'Ops',
          text: 'Erro ao cadastra curso'
        })
      })
  },
  computed: {
    cursos () {
      return this.$store.state.cursos
    }
  }
}
</script>
