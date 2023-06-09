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
          items: [],
          bearer: '',
          baseurl: 'https://api.tweetlizer.com/public'
         // baseurl : 'http://localhost:8000' //need to move to env variable
        };
      }
    
      componentDidMount() {
        console.log(process.env);
        // let baseurl ='https://api.tweetlizer.com/public'
         if (process.env.NODE_ENV==='development') {
            this.setState({
              baseurl : 'http://localhost:8000'
            })
        }

        var key = process.env.REACT_APP_NOT_SECRET_CODE.split('=');
        if (key.length = 2) {
          key = key[1];
        }

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ key: key })
      };
        fetch(this.state.baseurl + "/api/auth", requestOptions)
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result.bearer);
              this.setState({
                isLoaded: true,
                //items: result.items
                bearer: result.bearer
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                //error
              });
            }
          )

          
      }

      componentDidUpdate() {
        if (this.state.isLoaded == true) {
          const requestOptions = {
            method: 'GET',
           // headers: { 'Content-Type': 'application/json' },
          //  body: JSON.stringify({ key: key })
        };
          fetch(this.state.baseurl + "/api/test/"+this.state.bearer, requestOptions)
            .then(res => res.json())
            .then(
              (result) => {
                console.log(result);
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  //error
                });
              })
        }
      }

    render() {
     // var _this = this;
//      setTimeout(function () {//
//        let baseurl ='https://api.tweetlizer.com/public'
//        if (process.env.NODE_ENV==='development') {
//            baseurl = 'http://localhost:8000'
//       }
//        const requestOptions = {
//          method: 'GET',
//          //headers: { 'Content-Type': 'application/json' },
//          //body: JSON.stringify({ key: key })
//      };
//        fetch(baseurl + "/api/test/" + _this.state.bearer, requestOptions)
//          .then(res => res.json())
//          .then(
//            (result) => {
//                console.log(result);
              // this.setState({
              //  isLoaded: true,
                //items: result.items
               // bearer: result.bearer
             // });
//            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
//            (error) => {
//              _this.setState({
//                isLoaded: true,
//                //error
//              });
//            }
//          )
//      },2000);
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