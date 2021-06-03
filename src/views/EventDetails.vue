<template>
  <ul v-if="event">
    <li>Category: {{ event.category }}</li>
    <li>Date: {{ event.date }}</li>
    <li>Description: {{ event.description }}</li>
    <li>Location: {{ event.location }}</li>
    <li>Organizer: {{ event.organizer }}</li>
    <li>Time: {{ event.time }}</li>
    <li>Title: {{ event.title }}</li>
  </ul>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      event: null,
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style></style>
