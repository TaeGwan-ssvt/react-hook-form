import React from 'react';
import './App.css';
import Login from './Login';
import HookForm from './HookForm';

function App() {
  // Controller 컴포넌트의 rouels가 동작을 안함
  return (
    <div className="App">
      {/* <Login /> */}
      <HookForm />
    </div>
  );
}

export default App;
