import { useContext } from 'react';
import { FormCardContext } from '../../contexts/FormCardContext';
import { ITask } from '../../molecules/Form/interfaces/ITask';
import { Button } from '../../atoms/Button';

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
      <Button buttonType='button' buttonText={taskElement.done ? '✗' : '✓'} buttonClass='btn btn-secondary' onClick={() => toggleDoneTask(index)} />
      <Button buttonType='button' buttonText='🗑' buttonClass='btn btn-danger' onClick={() => removeTask(index)} />
    </div>
  );
}