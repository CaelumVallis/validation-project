import { useDispatch } from 'react-redux';

import './App.css';

import { Form } from './components/form/Form';
import { List } from './components/list/List';
import { addValues } from './store/formDataSlice';

function App() {
  const dispatch = useDispatch();

  const onPushToStore = (values) => {
    dispatch(addValues(values));
  };

  return (
    <div className='App'>
      <Form pushToStore={onPushToStore} />
      <List />
    </div>
  );
}

export default App;
