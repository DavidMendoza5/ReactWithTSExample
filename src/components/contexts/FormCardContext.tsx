import { createContext, useState } from 'react';
import { ITask } from '../molecules/Form/interfaces/ITask';

type FormContextProp = {
  children: JSX.Element | JSX.Element[]
}

type FormCardContextProps = {
  tasks: ITask [],
  createTask: (task: ITask) => void,
  updateTask: (newTasksArray: ITask[]) => void,
  removeTask: (index: number) => void,
}

export const FormCardContext = createContext({} as FormCardContextProps);

export const FormCardProvider = ({ children }: FormContextProp) => {
  const [tasks, setTasks] = useState<ITask []>([]);



  const createTask = (task: ITask): void => {
    const newTasksArray: ITask[] = [...tasks, task];
    
    setTasks(newTasksArray);
  }

  const updateTask = (newTasksArray: ITask[]): void => {
    setTasks(newTasksArray);
  }

  const removeTask = (index: number): void => {
    const newTasksArray: ITask[] = [...tasks];
    newTasksArray.splice(index, 1);
    setTasks(newTasksArray);
    
  }

  return (
    <FormCardContext.Provider value={{
      tasks,
      createTask,
      updateTask,
      removeTask
    }}>
      {children}
    </FormCardContext.Provider>
  );
}