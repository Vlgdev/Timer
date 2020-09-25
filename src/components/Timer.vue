<template>
  <div class="timer bar" :class="{active: timer.active}">
    <div class="timer__time">
      {{ timer.time | time}}
    </div>
    <div class="timer__btns">
      <div v-if="!timer.active" class="btn timer-play" @click="startTimer"></div>
      <div v-else class="btn timer-pause" @click="pauseTimer"></div>
      <div class="btn timer-reset" @click="resetTimer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  props: ["timer"],
  methods: {
    startTimer() {
      this.$emit('start', this.timer.id)
    },
    pauseTimer() {
      this.$emit('pause', this.timer.id)
    },
    resetTimer() {
      this.$emit('reset', this.timer.id)
    }
  }
};
</script>