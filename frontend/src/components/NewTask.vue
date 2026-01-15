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
  margin: 35px 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
}

.form-element {
  outline: none;
  font-size: 2rem;
  border: 1px solid #FFF;
  padding: 5px 10px 8px;
  color: #FFF;
  box-sizing: border-box;
}

input.form-element {
  flex: 1;
  background: #FFF2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  min-width: 0;
}

button.form-element {
  border-left: none;
  background-color: #2196F3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 60px;
  flex-shrink: 0;
}

/* Mobile devices (up to 767px) */
@media screen and (max-width: 767px) {
  .new-task {
    margin: 20px 10px;
    max-width: 100%;
    padding: 0 10px;
  }

  .form-element {
    font-size: 1.2rem;
    padding: 8px 10px;
  }

  button.form-element {
    width: 50px;
  }
}

/* Tablet devices (768px to 1024px) */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .new-task {
    margin: 30px 15px;
    max-width: 90%;
  }

  .form-element {
    font-size: 1.5rem;
  }

  button.form-element {
    width: 55px;
  }
}

/* Desktop devices (1025px and above) */
@media screen and (min-width: 1025px) {
  .new-task {
    margin: 35px 20px;
    max-width: 600px;
  }

  .form-element {
    font-size: 2rem;
  }

  button.form-element {
    width: 60px;
  }
}
</style>