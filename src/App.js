import React, { Component } from 'react';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Welcome from './components/Services/Welcome';
import Emoji from './components/Emoji/Emoji';
import Footer from './components/Footer/Footer';
import Team from './components/TeamCards/TeamCard';

class App extends Component {
  
  render() { 
    return ( 
      <div>
        {/* <h1>Welcome</h1> */}
        <Header />
        <Landing />
        <Welcome />
        <Emoji />
        <Team />
        <Footer />
        
      </div>
     );
  }
}
 
export default App;
