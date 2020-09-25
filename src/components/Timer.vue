<template>
  <div class="timer bar" :class="{active: timer.active}">
    <div class="timer__time">
      {{ timer.time | time}}
    </div>
    <div class="timer__btns">
      <button v-if="!timer.active" class="timer-play" @click="startTimer"></button>
      <button v-else class="timer-pause" @click="pauseTimer"></button>
      <button class="timer-reset" @click="resetTimer"></button>
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