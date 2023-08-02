import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [no,setNo] = useState(0);
  const [Count,setCount] = useState(0);

  const plus = () => {
      setNo(no+1)
  }

  const reset = () => {
    setNo(Count)
}

  const minus = () => {
    setNo(no-1)
}

  return (
    <div className="main">
        <div className='center'>
            <h1>{no}</h1>
            <div className='btn'>
                <button onClick={()=>plus()}>Increment</button>
                
                <button onClick={()=>minus()}>Decrement</button>
            </div>
            <div className='btn'>
            <button onClick={reset}>Reset</button>
            </div>
        </div>
    </div>
  );
}

export default App;
