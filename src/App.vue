<template>
    <div id="app">
      <app-header></app-header>
      <router-view></router-view>
    </div>
</template>

<script>
import Header from './layouts/header.vue';
    export default {
      name: 'app',
      components: {
        'app-header': Header
      }
    }
</script>