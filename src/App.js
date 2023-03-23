import React from 'react'
import Flex from './Flex';
import './App.css';
import './font-awesome/css/font-awesome.min.css';
import bluebg from './space-bg.jpg';

class App extends React.Component {
   
    render() {
    return (
        <div data-env={process.env.NODE_ENV} className="App" style={{ backgroundImage:`url(${bluebg})` }}>
    
          <div className = "header"><h1>Tweetlizer.com</h1></div>
          <Flex />
        </div>
      );
    }
}

export default App