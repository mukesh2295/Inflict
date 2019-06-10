import React from 'react';
import './App.css';
import ValidatedForm from './components/Login/ValidateForm';
import Styles from './components/Login/Styles.css';

function App() {
  return (
    <div className="App">
      <h1> Login Form</h1>
      <ValidatedForm />
    </div>
  );
}

export default App;
