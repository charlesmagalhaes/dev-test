<template>
  <div class="new-task">
    <input v-model="name" @keydown.enter="add" type="text"
    class="form-element" placeholder="Nova tarefa">
    <button class="form-element" @click="add">+</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },

  methods: {
    add() {
      this.$emit('taskAdded', { name: this.name})
      this.name = ''
    }
  }
}
</script>

<style scoped>
.new-task {
  margin: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .new-task {
    margin: 20px 10px;
    width: calc(100% - 20px);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .new-task {
    margin: 30px auto;
    max-width: 500px;
  }
}

.form-element {
  outline: none;
  font-size: 2rem;
  border: 1px solid#FFF;
  padding: 5px 10px 8px;
  color: #FFF;
}

@media (max-width: 768px) {
  .form-element {
    font-size: 1.2rem;
    padding: 5px 8px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .form-element {
    font-size: 1.5rem;
  }
}

input.form-element {
  width: 100%;
  flex: 1;
  background: #FFF2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

button.form-element {
  border-left: none;
  background-color: #2196F3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  min-width: 50px;
}

@media (max-width: 768px) {
  button.form-element {
    min-width: 45px;
    font-size: 1.2rem;
  }
}

</style>