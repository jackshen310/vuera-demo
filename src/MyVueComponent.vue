<template>
  <div>
    <h4 class="red">{{ this.message }}</h4>
    <a-list bordered :dataSource="data">
      <a-list-item slot="renderItem" slot-scope="item, index">{{
        item
      }}</a-list-item>
      <div slot="header">
        <a-input v-model="value" @keydown="handleKeydown" />
      </div>
      <div slot="footer">total:{{ todoSize }}</div>
    </a-list>
  </div>
</template>
<style scoped>
.red {
  color: red;
}
</style>
<script>
export default {
  name: "Testing",
  props: ["message", "onSubmit"],
  methods: {
    handleKeydown(e) {
      if (e.key === "Enter" && this.value) {
        this.data.push(this.value);
        this.value = "";
      }
    }
  },
  watch: {
    value: function(newValue, oldValue) {
      this.onSubmit(newValue);
    }
  },
  computed: {
    todoSize: function() {
      return this.data.length;
    }
  },
  data() {
    return {
      data: [
        "Racing car sprays burning fuel into crowd.",
        "Japanese princess to wed commoner."
      ],
      value: ""
    };
  },
  created: function() {
    // `this` 指向 vm 实例
    console.log("message: " + this.message);
  }
};
</script>
