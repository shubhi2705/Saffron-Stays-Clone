
import { useEffect, useState } from 'react';
import './App.css';
import Hotels from './Component/Hotels';

 function App() {

  const [rooms,setRooms]=useState([]);
  useEffect(()=>{
    setRooms([1,2,3,4,5,6,7,8,9,10,11,12]);
  },[])

  return (
    <div className="App">
     <Hotels rooms={rooms} />
    </div>
  );
}

export default App;
