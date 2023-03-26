import React from 'react'
import { Helmet } from 'react-helmet';
import Header from './Header';
import Content from './Content';
import './assets/main.scss';
import bluebg from './space-bg.jpg';

class App extends React.Component {

    render() {
  
    return (
        <div data-env={process.env.NODE_ENV} className="App" >
        <Helmet>
            <title>Tweetlizer</title>
            <meta name="description" content="App Description" />
            <meta name="theme-color" content="#008f68" />
        </Helmet>
          <Header />
          <Content />
        </div>
      );
    }
}

export default App