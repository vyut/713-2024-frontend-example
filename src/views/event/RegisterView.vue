<script setup lang="ts">
import { toRefs } from 'vue'
import type { Event } from '@/types'
const props = defineProps<{
  event: Event
  id: string
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const register = () => {
  console.log('Register event here')
}
</script>
<template>
  <p>Register event here</p>
  <button @click="register">Register</button>
</template>
