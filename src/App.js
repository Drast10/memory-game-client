import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import { SelectLevel } from './components/select-level/select-level';
import { GameInstruction } from './components/game-instruction/game-instruction';

function App() {
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Route exact path ='/' component={GameInstruction} />
      <Route exact path='/game-level' component = {SelectLevel}/>
    </div>
  );
}

export default App;
