import { useContext } from 'react';
import { FormCardContext } from '../../contexts/FormCardContext';
import { Form } from '../../molecules/Form/Form';
import { ITask } from '../../molecules/Form/interfaces/ITask';
import { TaskItem } from '../../molecules/Form/TaskItem';

export const FormCard = () => {
  const { 
    tasks,
  } = useContext(FormCardContext);


  return (
    <div className='card'>
      <div className='card-body'>
        <Form />
        {
          tasks.map((element: ITask, index: number) => (
              <TaskItem key={index} taskElement={element} index={index} />
            )
          )
        }
      </div>
    </div>
  );
}