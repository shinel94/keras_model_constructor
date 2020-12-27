import './App.css';
import React  from 'react';
import ModelBuilder from "./container/ModelBuilder/ModelBuilder";
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import ModelSaver from "./container/ModelSaver/ModelSaver";
import GotoButton from './components/UI/GotoButton'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route path={'/'} render={props => <GotoButton target={'Model Build'} url={'model-build'} {...props}/>}/>
            <Route path={'/model-build'} render={props => <GotoButton target={'Model Save'} url={'model-save'} {...props}/>}/>
            <Route path={'/model-build'} component={ModelBuilder}/>
            <Route path={'/model-save'} component={ModelSaver}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
