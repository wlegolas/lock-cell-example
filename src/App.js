import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header/Header';
import Main from './components/page/Main';
import Footer from './components/footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;