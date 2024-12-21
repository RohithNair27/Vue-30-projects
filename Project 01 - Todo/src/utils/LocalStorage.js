import {
  LOCAL_STORAGE_KEY_TASKS,
  LOCAL_STORAGE_UNABLE_TO_RETRIVE_ERROR,
  LOCAL_STORAGE_ITEM_NOT_EXISTS,
} from "@/constants/LocalStorageConstants";

export function storeTasks(taskToAdd) {
  const existingTasks = getAllTasks();
  try {
    if (existingTasks !== null) {
      let updatedTasks = [...existingTasks, taskToAdd];
      localStorage.setItem(
        LOCAL_STORAGE_KEY_TASKS,
        JSON.stringify(updatedTasks)
      );
    } else {
      let newArray = [taskToAdd];
      localStorage.setItem(LOCAL_STORAGE_KEY_TASKS, JSON.stringify(newArray));
    }
  } catch (error) {
    console.error("Error reading tasks from localStorage:", error);
    return {
      success: false,
      message: LOCAL_STORAGE_UNABLE_TO_RETRIVE_ERROR,
      error: true,
    };
  }
}

export function deleteSingleTask(id) {
  const existingTasks = getAllTasks();
  try {
    if (existingTasks !== null) {
      let index = existingTasks.findIndex((element) => element.id === id);

      if (index != -1) {
        existingTasks.splice(index, 1);
      }

      localStorage.setItem(
        LOCAL_STORAGE_KEY_TASKS,
        JSON.stringify(existingTasks)
      );
    } else {
      return {
        success: false,
        message: LOCAL_STORAGE_ITEM_NOT_EXISTS,
        error: false,
      };
    }
  } catch {
    return {
      success: false,
      message: LOCAL_STORAGE_UNABLE_TO_RETRIVE_ERROR,
      error: true,
    };
  }
}

export function updateTaskCompletionStatus(id) {
  const existingTasks = getAllTasks();

  try {
    const Index = existingTasks.findIndex((element) => element.id === id);
    existingTasks[Index] = {
      ...existingTasks[Index],
      completed: !existingTasks[Index].completed,
    };
    localStorage.setItem(
      LOCAL_STORAGE_KEY_TASKS,
      JSON.stringify(existingTasks)
    );
  } catch (error) {
    console.log(error);
  }
}
export function getAllTasks() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TASKS)) || [];
  } catch (error) {
    console.error("Error reading tasks from localStorage:", error);
    return {
      success: false,
      message: LOCAL_STORAGE_UNABLE_TO_RETRIVE_ERROR,
      error,
    };
  }
}
