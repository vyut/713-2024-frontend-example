<script setup lang="ts">
import type { Event } from '@/types'
import { ref } from 'vue'

const event = ref<Event>({
  id: 1,
  category: 'Category 1',
  title: 'Event 1',
  description: 'Description of Event 1',
  date: '2021-10-10',
  time: '10:00',
  location: 'Location 1',
  petsAllowed: true,
  organizer: {
    name: 'Organizer 1',
  },
})
</script>

<template>
  <div class="event-class">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
