import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modelCadastro: false,
    cursos: []
  },
  mutations: {
    abrirModelCadastro (state, value) {
      state.modelCadastro = value
    },
    definirCursos (state, value) {
      state.cursos = value
    },
    adicionarCurso (state, value) {
      state.cursos.push(value)
    }
  }
})
