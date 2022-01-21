import React, { Component, useEffect } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import {fetchSmurfs} from './actions';
import {connect} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = ({smurfs, dispatch})=> {
  useEffect(()=> {
    dispatch(fetchSmurfs())
  },[])

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList smurfs={smurfs}/>
        <AddForm/>
      </main>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.