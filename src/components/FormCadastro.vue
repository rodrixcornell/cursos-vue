<template>
  <b-modal id="modal-1" title="BootstrapVue" v-model="abrirModal" hide-footer>
    <p class="my-4">Hello from modal!</p>

    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Nome:">
        <b-form-input v-model="form.nome" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group label="URL:">
        <b-form-input v-model="form.url" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group label="Descrição:">
        <b-form-input v-model="form.descricao" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group label="Capa:">
        <input type="file" @change="selecionaCapa">
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

  </b-modal>
</template>

<script>
import Axios from 'axios'
const Compress = require('compress.js')

export default {
  name: 'FormCadastro',
  data() {
    return {
      compress: new Compress(),
      form: {
        nome: '',
        url: '',
        capa: '',
        descricao: ''
      }
    }
  },
  methods: {
    selecionaCapa (evt) {
      const files = [...evt.target.files]

      this.compress.compress(files, {
        size: 4,
        quality: .75
      }).then((data) => {
        console.log(data[0])
        this.form.capa = data[0].data
      })
    },
    onSubmit () {
      // alert('passou aki')
      console.log(this.form.capa)
      Axios.post('http://laravel-vue-new.net/api/cursos', this.form)
        .then(({ data }) => {
          console.log(data)
          this.$store.commit('adicionarCurso', data)
          this.$store.commit('abrirModelCadastro', false)
          this.$swal({
            icon: 'success',
            title: 'Sucesso',
            text: 'Curso cadastrado com sucesso'
          })
        })
        .catch(( err ) => {
          console.log(err)
          this.$swal({
            icon: 'error',
            title: 'Ops',
            text: 'Erro ao cadastra curso'
          })
        })
      // Axios.post('http://laravel-vue-new.net/api/cursos', {
      //   nome: this.form.nome,
      //   url: this.form.url,
      //   capa: this.form.capa,
      //   descricao: this.form.descricao,
      // })
    }
  },
  computed: {
    abrirModal: {
      get () {
        return this.$store.state.modelCadastro
      },
      set (v) {
        this.$store.commit('abrirModelCadastro', v)
      }
    }
  }
}
</script>
