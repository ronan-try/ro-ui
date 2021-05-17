<template>
  <h2>Hi Bro</h2>
  <pre> {{ state.config }} </pre>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      config: '--',
    })


    return { state }
  },
})
</script>
