<template>
  <div class="task"
    :class="stateClass">
    <p>{{task.name}}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {type: Object, required: true}
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending
      }
    }
  }
}
</script>

<style scoped>
  .task {
    box-sizing: border-box;
    width: 1000px;
    height: 80px;
    padding: 10px;
    border-radius: 8px;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  .pending {
    border-left: 12px solid #b73229;
    background-color: #F44336;
  }

  .done {
    color: #ddd;
    border-left: 12px solid #0A8F08;
    background-color: #4CAF50;
    text-decoration: line-through;
  }

</style>