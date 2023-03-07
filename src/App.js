import './App.css';
import { useState } from 'react';

const Person = (props) => {
  return (
    <>
      <h1>Name:{props.name}</h1>
      <h2>Last Name:{props.LastName}</h2>
      <h3>age:{props.age}</h3>
    </>
  )
}

const App = () => {
  const [counter,setCounter] = useState(0);
  return (
    <div className="App">
      <button onClick={()=>{setCounter(prevCount=>prevCount-1)}}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>{setCounter(prevCount=>prevCount+1)}}>+</button>
    </div>
  );
}

export default App;
