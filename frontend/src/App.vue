<template>
	<div id="app">
		<h1>My TODO List</h1>
    <NewTask @taskAdded="addTask"/>
    <button @click="doneAllTask" class="button button2">Finalizar todos</button>
    <TaskGrid :tasks="tasks" 
      @taskDeleted="deleteTask"
      @taskStateChanged="toggleTaskState"
      @updateTask="updateTaskNow($event)" />
      
	</div>
</template>

<script>
import TaskGrid from "./components/TaskGrid";
import NewTask from "./components/NewTask";

export default {
  components: { TaskGrid, NewTask },
  data() {
    return {
      tasks: []
    }
  },

  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    }
  },

  methods: {
    addTask(task) {
      const sameName = t => t.name === task.name
      // eslint-disable-next-line no-console
      const reallyNew = this.tasks.filter(sameName).length == 0
      if(reallyNew) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true,
        })
      }
    },

    updateTaskNow(task) {
      for (let i in this.tasks) {
        if (this.tasks[i].name == task.nameCurrent ){
          this.tasks[i].name = task.nameNew
        }
      }
    },

    deleteTask(i) {
      this.tasks.splice(i, 1)
    },

    toggleTaskState(i) {
      this.tasks[i].pending = !this.tasks[i].pending
    },

    doneAllTask() {
      for (let i in this.tasks) {
        this.tasks[i].pending = false;
      }
    }
  },

  created() {
    const json = localStorage.getItem('tasks')
    const array = JSON.parse(json)
    if (Array.isArray(array)) {
      this.tasks = array
      
    }else{
      this.tasks = []
    }
  }
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
		margin: 0;
		padding: 0;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: auto;
		padding: 20px 10px;
		box-sizing: border-box;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
		text-align: center;
	}

  .button {
	background-color: #4CAF50; /* Green */
	border: none;
	color: white;
	padding: 16px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	transition-duration: 0.4s;
	cursor: pointer;
	border-radius: 15px;
  }

  .button2 {
	background-color: white; 
	color: black; 
	border: 2px solid #008CBA;
  }

  .button2:hover {
	background-color: #008CBA;
	color: white;
  }

  /* Mobile devices (up to 767px) */
  @media screen and (max-width: 767px) {
    #app h1 {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .button {
      padding: 12px 24px;
      font-size: 14px;
      width: 100%;
      max-width: 300px;
    }
  }

  /* Tablet devices (768px to 1024px) */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    #app h1 {
      font-size: 2.5rem;
    }

    .button {
      padding: 14px 28px;
      font-size: 15px;
    }
  }

  /* Desktop devices (1025px and above) */
  @media screen and (min-width: 1025px) {
    #app h1 {
      font-size: 3rem;
    }
  }
</style>
