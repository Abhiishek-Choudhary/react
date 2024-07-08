import './App.css'
import { useState } from 'react';

// let counter = 15;

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () =>{
  
    console.log("clicked",Math.random());
    counter = counter+1;
    setCounter(counter);
  }

  const removeval = () => {
    counter = counter - 1;
    if(counter>=0){
      setCounter(counter);
    }
  }

  return (
    <>
     <h1>Hello</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>
      Add value: {counter}
     </button>
     <br />
     <button onClick={removeval}>remove value: {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
