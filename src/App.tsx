import React from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1 className='heading pb-1'>To Do App</h1>
      <p className='pb-2'>Welcome</p>
      <InputField />
    </div>
  );
}

export default App;
