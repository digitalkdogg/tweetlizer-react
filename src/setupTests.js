// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


REACT_APP_NOT_SECRET_CODE=client_key=ZWajNLRLVjfBzhfvUoC46XFUYkcbKPOtp9WZgpxVAujrQI7H0iOxgX6QoSWhIOI7bEQJ8JwsAk0RA2ap2AiC5slIr69d8uAlwu9ANVDLD51DTK2vEXYgXNpq1WcEo6URSoRiG3crmUYNpqm843XK2s==REACT_BASEURL=testingthis npm start

constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      bearer: '',
    //  baseurl: 'https://api.tweetlizer.com/public'
      baseurl : 'http://localhost:8000' //need to move to env variable
    };
  }

  componentDidMount() {
    // let baseurl ='https://api.tweetlizer.com/public'
    // if (process.env.NODE_ENV==='development') {
     //   this.setState({
   //       baseurl : 'http://localhost:8000'
   //     })
  //  }

  //  var key = process.env.REACT_APP_NOT_SECRET_CODE.split('=');
  //  if (key.length = 2) {
  //    key = key[1];
 //   }

 //   const requestOptions = {
 //     method: 'POST',
 //     headers: { 'Content-Type': 'application/json' },
 //     body: JSON.stringify({ key: key })
 // };
 // if (this.state.error != true) {
 //   fetch(this.state.baseurl + "/api/auth", requestOptions)
 //     .then(res => res.json())
 //     .then(
 //       (result) => {
 //           console.log(result.bearer);
 //         this.setState({
 //           isLoaded: true,
            //items: result.items
 //           bearer: result.bearer
 //         });
 //       },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
//        (error) => {
//          this.setState({
//            isLoaded: false,
//            error: true
//          });
//        }
//      )

//  }
  }

  componentDidUpdate() {
//        if (this.state.isLoaded == true) {
//          const requestOptions = {
//            method: 'GET',
//        };
//          fetch(this.state.baseurl + "/api/test/"+this.state.bearer, requestOptions)
//            .then(res => res.json())
//            .then(
//              (result) => {
//                console.log(result);
//              },

//              (error) => {
//                this.setState({
//                  isLoaded: true,
              //error
//                });
//              })
//        }
  }
