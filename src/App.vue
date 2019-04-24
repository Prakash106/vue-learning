<template>
    <div id="app">
      <router-view name="header-top"></router-view>
      <router-view></router-view>
      <router-view name="header-bottom"></router-view>
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