import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DISPLAY from './display'

  function TODO(){                                                      //TODO component
    //const arr = ["default","defau"]
    const [task, setTask] = useState([]);


    function INP(){
      
      const addTask = ()=> {
        const inputval = document.querySelector('input').value;
        
          const newTask = task;
         
          if(inputval.length>0){
            setTask([...newTask.slice(0, newTask.length), inputval]);
          }
        
      }
      return <div className='inputContainer'>
                <input type="text" />
                <button onClick={addTask}>+</button>
              </div>
    }

    // TODO return value
    return (
      <div className='mainContainer'>
        <DISPLAY value = {task} />
        <INP />
      </div>
    )
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<TODO />);

  