import { useContext, useState, FormEvent } from 'react';
import { FormInput } from '../../atoms/FormInput';
import { Button } from '../../atoms/Button';
import { FormCardContext } from '../../contexts/FormCardContext';

export const Form = () => {
  const [newTask, setNewTask] = useState<string>('');
  const { 
    createTask,
  } = useContext(FormCardContext);

  const handleTaskInput = (text: string) => {
    setNewTask(text);
  }
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createTask({name: newTask, done: false});
    setNewTask('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormInput inputType='text' inputName='Task name'   value={newTask} onChange={handleTaskInput} />
      <Button buttonType='submit' buttonText='Save'  />
    </form>
  );
}