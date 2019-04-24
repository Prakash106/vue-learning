<template>
  <div id="app">
    <app-logic></app-logic>
    <app-result></app-result>
  </div>
</template>

<script>
    import Logic from './components/Logic.vue';
    import Result from './components/result.vue';

    export default {
      name: 'app',
      components: {
        'app-logic': Logic,
        'app-result': Result      
      },
    }
</script>