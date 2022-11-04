import React from 'react';
import './App.css';
import Login from './Login';
import HookForm from './HookForm';
import PureInput from './PureInput';
import ControlComponent from './ControlComponent';
import NotControllComponent from './NotControlComponent';

function App() {
  // Controller 컴포넌트의 rouels가 동작을 안함
  return (
    <div className="App">
      {/* <PureInput /> */}
      {/* <Login /> */}
      {/* <HookForm /> */}
      <br />
      <h1>제어 컴포넌트</h1>
      <br />
      <ControlComponent />
      {/* <br />
      <h1>비제어 컴포넌트</h1>
      <br />
      <NotControllComponent /> */}
    </div>
  );
}

export default App;
