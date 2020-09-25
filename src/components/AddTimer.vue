<template>
  <button class="add-timer bar" @click="addTimer">
    <div class="plus-line plus-vertical"></div>
    <div class="plus-line plus-horizont"></div>
  </button>
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