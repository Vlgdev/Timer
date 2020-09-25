<template>
  <div class="add-timer btn bar" @click="addTimer">
    <div class="plus-line plus-vertical"></div>
    <div class="plus-line plus-horizont"></div>
  </div>
</template>

<script>
export default {
  name: "AddTimer",
  methods: {
    addTimer() {
      this.$emit("add-timer");
    },
  },
};
</script>