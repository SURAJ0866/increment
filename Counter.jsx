import React from 'react';
import { useState } from 'react';
function Counter() {
    let [counter,setCounter] = useState(0);
   function handleincrement(){
      setCounter(counter++);
   }
function handledecrement(){
    (counter==0)?setCounter(counter):setCounter(counter--)
   //if(counter==0){
    //setCounter(counter)
   //}else{
    //setCounter(counter--)
   //}

}






  return (
    <div>
        <h1>{counter}</h1>
      <button style={{margin:"12px"}} onClick={handleincrement}>increment</button>
      <button onClick={handledecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
