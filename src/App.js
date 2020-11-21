import React from 'react';
import { useState } from 'react';
import './App.css';
import Cars from './cars'
function App() {
    let [count , setCount]= useState(1);
    return(
<div>
<Cars brandH="Honda" brandT="Toyota" brandS="Suzuki"/>
<h5>The counter is :{count}</h5>
<br/>
<button onClick ={()=>setCount(count + 1)}> Update Counter </button>
</div>
 );
}

export default App;
