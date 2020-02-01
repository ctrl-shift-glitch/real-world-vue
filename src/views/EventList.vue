<template>
  <div>
    <h1>Event Listings</h1>
    <EventCard />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    EventCard
  }
}
</script>

<style lang="scss" scoped></style>
