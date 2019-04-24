<template>
      <div>
            <button class="uk-button" @click="increment({by: 20, duration: 1000})">Increment</button>
            <button class="uk-button" @click="decrement()">Decrement</button>
      </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex';

export default {
      methods: {
            ...mapActions([
                  'increment',
                  'decrement'
            ])
      }
}
</script>
