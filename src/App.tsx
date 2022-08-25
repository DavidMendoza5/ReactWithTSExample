import './App.css';
import { FormCard } from './components/organisms/Form/FormCard';
import { FormCardProvider } from './components/contexts/FormCardContext';

function App(): JSX.Element {
  return (
    <div className='container p-4'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <FormCardProvider >
            <FormCard />
          </FormCardProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
