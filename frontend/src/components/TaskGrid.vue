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
}

.no-task {
  color: #AAA;
  font-size: 1.7rem;
}

</style>