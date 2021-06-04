
import './App.css';
import { useState } from 'react';
import AddCity from './Component/AddCity'



function App() {

  const [isOpen,setisOpen]= useState(false);

  const addCity=()=>{
    setisOpen(!isOpen);
  
  }
  return (
    <div className="App">
      <div >
    
    <input
      type="button"
      value="ADD CITY"
      onClick={addCity}
    />
    {isOpen&&<AddCity/>}
    </div>
    </div>
  );
}

export default App;
