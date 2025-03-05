<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import eventService from '@/services/EventService'
import { ref, computed } from 'vue'
import type { Event } from '@/types'
const events = ref<Event[]>([])
interface Props {
  page: number
}
const props = defineProps<Props>()
const page = computed(() => props.page)

eventService.getEvents(page.value, 2).then((response) => {
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
