<template>
  <div class="teste">
  <div 
    @click="$emit('taskStateChanged', task)"
    class="task"
    :class="stateClass">
    <span @click.stop="$emit('taskDeleted', task)" class="close"><i class="material-icons">delete_forever</i></span>
    <span v-on:click.stop="toogle = !toogle" class="change"><i class="material-icons">edit</i></span>
    <p>{{task.name}}</p>
   </div>
  <div v-if="toogle">
    <task-change 
    :task='task'
    @fecharInput="fecharInput"
    @updateTask="$emit('updateTask', $event)"
    ></task-change>
  </div>
  </div>
</template>

<script>
import TaskChange from "./TaskChange";
export default {
  props: {
    task: {type: Object, required: true}
  },

  components: { TaskChange },

    data() {
    return{
      toogle : false,
    }
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending
      }
    }
  },

  methods: {
    fecharInput(event) {
      this.toogle = event.value
    },

    updatedTask(event) {
      /* eslint-disable */
      console.log(event);
    }
  }
}
</script>

<style scoped>
  .task {
    position: relative;
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
    color: #ddd;
    border-left: 12px solid #b73229;
    background-color: #F44336;
  }

  .done {
    color: #ddd;
    border-left: 12px solid #0A8F08;
    background-color: #4CAF50;
    text-decoration: line-through;
  }

  .pending .close {
    background-color: #b73229 ;
  }
  .done .close {
    background-color: #0A8F08;
  }

  .teste {
    align-items: center;
    align-content: center;
  }

  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    height: 25px;
    width: 25px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
  }

  .pending .change {
    background-color: #b73229 ;
  }
  .done .change {
    background-color: #0A8F08;
  }

  .change {
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    height: 25px;
    width: 25px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
  }

  .inputcss {
    align-items: center;
    justify-content: center;
  }

</style>