// import heart from './heart-svgrepo-com.svg'

import kuromi from "./Koromi-not-cute.webp"
import './App.css';
import { Heart } from './kuromi';

import { HeartStatic } from './static-kuromi';
import { useState } from "react";

function App() {
  const [heartColor, setHeartColor] = useState(false)
  const [changename1,setChangename1] = useState("name1")
  const [changename2,setChangename2] = useState("name2")
  return (
    <div className="App">
      <div className="Main">
      <header className="App-header">
        <img src={kuromi} className="kuromi" alt=" " />
       
        {heartColor && <Heart props={heartColor} className="heart"/>}
        {!heartColor && <HeartStatic onClick={()=>setHeartColor(true)} className="heart"/>}
        

        <p>
         <span onClick={()=>setChangename1("clickedname1")} id={changename1}>Кате</span>
         <span onClick={()=>setChangename2("clickedname2")} id={changename2}>рине</span>
        </p>
    
      </header>
      </div>
    </div>
  );
}

export default App;
