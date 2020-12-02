import './App.css';
import React from 'react'
import ModelBuilder from "./container/ModelBuilder/ModelBuilder";
import { BrowserRouter, Route } from 'react-router-dom'
import ModelSaver from "./container/ModelSaver/ModelSaver";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route path={'/model-build'} component={ModelBuilder}/>
            <Route path={'/model-save'} component={ModelSaver}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
