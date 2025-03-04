<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'
import { ref } from 'vue'
import type { Event } from '@/types'
const events = ref<Event[]>([])
axios.get('http://localhost:3000/events').then((response) => {
  events.value = response.data
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
