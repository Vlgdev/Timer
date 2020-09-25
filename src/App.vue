<template>
  <div id="app">
    <div class="container" :class="{center: !timers.length}">
      <Timer
        v-for="t in timers"
        :key="t.id"
        :timer="t"
        @start="startTimer"
        @pause="pauseTimer"
        @reset="resetTimer"
      />
      <AddTimer @add-timer="addTimer" />
    </div>
  </div>
</template>

<script>
import Timer from "./components/Timer";
import AddTimer from "./components/AddTimer";

export default {
  name: "App",
  data: () => ({
    timers: [],
  }),
  components: {
    Timer,
    AddTimer,
  },
  methods: {
    startTimer(id) {
      this.timers.forEach((t) => {
        if (t.id === id) {
          t.active = true;
          t.interval = setInterval(() => {
            t.time += 1;
          }, 1000);
        }
      });
    },
    pauseTimer(id) {
      this.timers.forEach((t) => {
        if (t.id === id) {
          t.active = false;
          clearInterval(t.interval);
          t.interval = null;
        }
      });
    },
    resetTimer(id) {
      this.timers.forEach((t) => {
        if (t.id === id) {
          t.active = false;
          t.time = 0;
          clearInterval(t.interval);
          t.interval = null;
        }
      });
    },
    addTimer() {
      this.timers.push({
        time: 0,
        active: false,
        id: Date.now(),
      });
    },
  },
};
</script>

<style lang="scss">
@import "~normalize.css";
@import "./assets/scss/style.scss";
</style>
