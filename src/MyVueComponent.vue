<template>
  <div>
    <h4>{{this.message}} {{ this.clicky }}</h4>
    <input @change="handleChange" />
    <button @click="clickMe()">{{ this.clicky ? "Click" : "Clack" }}</button>
  </div>
</template>
<script>
export default {
  name: "Testing",
  props: ["message", "onSubmit"],
  methods: {
    clickMe() {
      this.clicky = !this.clicky;
    },
    handleChange(e) {
      this.onSubmit(e.target.value);
    }
  },
  data() {
    return {
      clicky: true
    };
  },
  created: function() {
    // `this` 指向 vm 实例
    console.log("message: " + this.message);
  }
};
</script>
