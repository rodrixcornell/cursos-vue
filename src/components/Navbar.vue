<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Cursos Legais</b-navbar-brand>

  <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item @click="modalCadastro">Profile</b-nav-item>
    </b-navbar-nav>

  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    modalCadastro () {
      this.$store.commit('abrirModelCadastro', true)
    }
  }
}
</script>
