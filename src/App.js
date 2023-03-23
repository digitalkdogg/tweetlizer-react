import React from 'react'
import { Helmet } from 'react-helmet';
import Flex from './Flex';
import './App.css';
import './font-awesome/css/font-awesome.min.css';
import bluebg from './space-bg.jpg';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
         let baseurl =''
         if (process.env.NODE_ENV==='development') {
             baseurl = 'http://localhost:8001'
        }
        fetch(baseurl + "/api/test")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {
    return (
        <div data-env={process.env.NODE_ENV} className="App" style={{ backgroundImage:`url(${bluebg})` }}>
        <Helmet>
            <title>Tweetlizer</title>
            <meta name="description" content="App Description" />
            <meta name="theme-color" content="#008f68" />
        </Helmet>
          <div className = "header"><h1>Tweetlizer.com</h1></div>
          <Flex />
        </div>
      );
    }
}

export default App