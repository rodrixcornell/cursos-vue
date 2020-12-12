<template>
  <div class="row">
    <div v-for="c in cursos" :key="c.url">
       <b-card
        :title="c.nome"
        :img-src="c.capa"
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
export default {
  name: 'PainelCursos',
  data () {
    return {
      cursos: [
        {
          nome: 'Curso PHP',
          url: 'http://curso.php',
          capa: 'https://picsum.photos/600/300/?image=21',
          descricao: 'Curso Legal de PHP'
        },
        {
          nome: 'Curso Javascript',
          url: 'http://curso.javascript',
          capa: 'https://picsum.photos/600/300/?image=22',
          descricao: 'Curso Legal de Javascript'
        },
        {
          nome: 'Curso Python',
          url: 'http://curso.python',
          capa: 'https://picsum.photos/600/300/?image=23',
          descricao: 'Curso Legal de Python'
        },
        {
          nome: 'Curso Ruby',
          url: 'http://curso.ruby',
          capa: 'https://picsum.photos/600/300/?image=24',
          descricao: 'Curso Legal de Ruby'
        }
      ]
    }
  }
}
</script>
