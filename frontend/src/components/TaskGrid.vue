<template>
  <div class="task-grid">
    <template v-if="tasks.length">
      <Task v-for="(task, i) in tasks" 
      :key="task.name" 
      @taskDeleted="$emit('taskDeleted', i)"
      @taskStateChanged="$emit('taskStateChanged', i)"
      @updateTask="$emit('updateTask', $event)"
      :task="task"></Task>
    </template>
    <p v-else class="no-task">Não existe nenhuma tarefa</p>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  components: { Task },
  props: {
    tasks: {type: Array, required: true }
  }
}
</script>

<style scoped>
.task-grid {
  margin: 50px 20px;
  padding: 10px;
  margin-top: 40px;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
}

.no-task {
  color: #AAA;
  font-size: 1.7rem;
  text-align: center;
}

/* Mobile devices (up to 767px) */
@media screen and (max-width: 767px) {
  .task-grid {
    margin: 20px 10px;
    padding: 5px;
    margin-top: 20px;
  }

  .no-task {
    font-size: 1.2rem;
  }
}

/* Tablet devices (768px to 1024px) */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .task-grid {
    margin: 40px 15px;
    padding: 8px;
    margin-top: 30px;
  }

  .no-task {
    font-size: 1.5rem;
  }
}

/* Desktop devices (1025px and above) */
@media screen and (min-width: 1025px) {
  .task-grid {
    margin: 50px 20px;
    padding: 10px;
    margin-top: 40px;
  }

  .no-task {
    font-size: 1.7rem;
  }
}
</style>