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
  margin: 20px;
  width: 100%;
  max-width: 600px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
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
  .changeCss {
    margin: 15px 10px;
    max-width: 100%;
    padding: 0 5px;
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
  .changeCss {
    margin: 18px 15px;
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
  .changeCss {
    margin: 20px;
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