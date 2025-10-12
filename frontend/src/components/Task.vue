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
    width: 100%;
    max-width: 1000px;
    height: auto;
    min-height: 80px;
    padding: 10px;
    border-radius: 8px;
    font-size: 1.5rem;
    font-weight: 300;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    word-wrap: break-word;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    .task {
      font-size: 1rem;
      padding: 10px 40px 10px 20px;
      margin: 10px;
      min-height: 60px;
    }
  }

  /* Tablet styles */
  @media (min-width: 769px) and (max-width: 1024px) {
    .task {
      font-size: 1.3rem;
      max-width: 700px;
      margin: 15px auto;
    }
  }

  /* Desktop styles */
  @media (min-width: 1025px) {
    .task {
      font-size: 2rem;
    }
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
    align-items: center;
  }

  @media (max-width: 768px) {
    .close {
      height: 30px;
      width: 30px;
      right: 5px;
      top: 5px;
    }
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
    align-items: center;
  }

  @media (max-width: 768px) {
    .change {
      height: 30px;
      width: 30px;
      right: 5px;
      bottom: 5px;
    }
  }

  .inputcss {
    align-items: center;
    justify-content: center;
  }

</style>