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
  margin: 100px;
  padding: 10px;
  margin-top: 40px;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

@media (max-width: 768px) {
  .task-grid {
    margin: 20px 10px;
    margin-top: 20px;
    padding: 5px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .task-grid {
    margin: 50px 30px;
    margin-top: 30px;
  }
}

.no-task {
  color: #AAA;
  font-size: 1.7rem;
}

@media (max-width: 768px) {
  .no-task {
    font-size: 1.2rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .no-task {
    font-size: 1.4rem;
  }
}

</style>