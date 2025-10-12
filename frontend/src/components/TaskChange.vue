<template>
  <div class="changeCss">
    <input v-model="name" @keydown.enter="edit" type="text"
           class="form-element" placeholder="alterar">
    <button class="form-element" @click="edit"><i class="material-icons">edit</i></button>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      name: this.task.name,
      pending: ''
    }
  },
  methods: {
    edit() {
      /*this.$emit('taskChange', { name: this.name})
      this.name = ''*/
      this.$emit('fecharInput', false)
      this.$emit('updateTask',{nameCurrent: this.task.name, nameNew: this.name })
    }
  }

}
</script>

<style scoped>
.changeCss {
  margin: 35px;
  width: 100%;
  max-width: 600px;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .changeCss {
    margin: 20px 10px;
    margin-top: 0px;
    width: calc(100% - 20px);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .changeCss {
    margin: 30px auto;
    margin-top: 0px;
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
  }
}

</style>