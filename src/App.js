import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Contact } from './components/contact/Contact';
import { NavBar } from './components/NavBar';
import store from './store';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AddContact} from './components/contact/AddContact';
import { EditContact } from './components/contact/EditContact';
import { DeleteContact } from './components/contact/DeleteContact';


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className='App'>
      <NavBar/>
      <div className='container'>
          <Routes>
          <Route exact path="/" element={<Contact/>}/>
          <Route exact path="/contact/add" element={<AddContact/>}/>
          <Route exact path="/contact/edit/:id" element={<EditContact/>}/>
          </Routes>
      </div>
    </div>
    </Router>
   </Provider>
  );
}

export default App;
