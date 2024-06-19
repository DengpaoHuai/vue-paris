import { reactive } from 'vue';

export const store = reactive({
  taskList: []
});

const useDashboardStore = () => {
  const addTask = (task) => {
    console.log(task);
    store.taskList.push(task);
  };

  return {
    addTask,
    tasks: store
  };
};

export default useDashboardStore;
