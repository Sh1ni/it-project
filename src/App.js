import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';

let SomeComponent = () => <Dialogs />

const App = (props) => {
  return (
    <div className = 'app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' 
            render={ () => <DialogsContainer store={props.store} /> }/>
          <Route path='/profile' 
            render={ () => <Profile store = {props.store}/> }/>
        </div>
    </div>
  )
  }


export default App;
