import { useContext } from 'react';
import { FormCardContext } from '../../contexts/FormCardContext';
import { ITask } from '../../molecules/Form/interfaces/ITask';

type TaskElmentType  = {
  taskElement: ITask, 
  index: number
}

export const TaskItem = ({ taskElement, index }: TaskElmentType) => {
  const { 
    tasks,
    updateTask,
    removeTask
  } = useContext(FormCardContext);

  const toggleDoneTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    updateTask(newTasks);
  }

  return (
    <div>
      <h3 style={{textDecoration: taskElement.done ? 'line-through' : ''}}>{taskElement.name}</h3>
      <button onClick={() => toggleDoneTask(index)} className='btn btn-secondary'>{taskElement.done ? '✓' : '✗'}</button>
      <button onClick={() => removeTask(index)} className='btn btn-danger'>🗑</button>
    </div>
  );
}