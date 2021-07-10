<template>
  <div class="changeCss">
    <input v-model="this.name" @keydown.enter="edit" type="text"
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
      this.$emit('taskChange', { name: this.name})
      this.name = ''
    }
  }

}
</script>

<style scoped>
.changeCss {
  margin: 35px;
  width: 600px;
  margin-top: 0px;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.form-element {
  outline: none;
  font-size: 2rem;
  border: 1px solid#FFF;
  padding: 5px 10px 8px;
  color: #FFF;
}

input.form-element {
  width: 500px;
  background: #FFF2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
button.form-element {
  border-left: none;
  background-color: #2196F3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

</style>