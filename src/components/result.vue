<template>
      <div>
            <h1>Result is: {{ doubleCount }}</h1>
            <p>Counts {{ stringCount }}</p>
      </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
      computed: {
            ...mapGetters([
                  'doubleCount',
                  'stringCount'
            ])
      }
}
</script>