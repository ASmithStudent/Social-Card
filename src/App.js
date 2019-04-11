import React, { Component } from 'react';
import MediaCardList from './MediaCardList';
import Navigation from './Navbar';
import Footer from './Footer';
class App extends Component {
  render() {
    return (
        <div className="App">
          <Navigation />
          <MediaCardList />
          <Footer />
        </div> 
    );
  }
}

export default App;
