import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App(props) {
  const [ value, setter ] = useState(0)

  return (
    <div className="App">
      <h1>Hello {props.title}</h1>
      <h2>Likes {value}</h2>
      <button onClick={ handleclick }>Like</button>
    </div>
  );
  function handleclick(){
    setter(value+1)
  }
}


export default App;
