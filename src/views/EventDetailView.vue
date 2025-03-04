<script setup lang="ts">
import { ref } from 'vue'
import type { Event } from '@/types'
const event = ref<Event>()
</script>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
