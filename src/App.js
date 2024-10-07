import logo from './logo.svg';
import React, { useState } from 'react';
import Pname from './w';
import './App.css';
import Fo from './card';
import { Page } from './w';
import { Pyes } from './w';
function App() {
  let [c, setc] = useState({ name: 'none', age: "none", yes: "none" });

  function hand() {
    if (c.name === 'none')
      setc({ ...c, name: 'flex' });
    if (c.name === 'flex')
      setc({ ...c, name: 'none' });
  }
function hand2(){
  if (c.age === 'none')
    setc({ ...c, age: 'flex' });
  if (c.age === 'flex')
    setc({ ...c, age: 'none' });
}
function hand3(){
  if (c.yes === 'none')
    setc({ ...c, yes: 'flex' });
  if (c.yes === 'flex')
    setc({ ...c, yes: 'none' });
}

  return (
    <div style={{ width: '400px', color: 'white', border: '1px solid #011', marginTop: '20%',background:"#04191e" ,borderRadius:'20px',boxShadow:'1px 1px 10px 3px black',padding:'10px' }} >

      <Fo t={hand} age={hand2} yes={hand3}></Fo>
      <Pname st={c.name} ss={hand}></Pname>
      <Page st={c.age} ss={hand2}  ></Page>
      <Pyes st={c.yes} ss={hand3} ></Pyes>
    </div>
  );
}

export default App;
