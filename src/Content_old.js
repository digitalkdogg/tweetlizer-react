import React from 'react';


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            clientKey : '',
            bearer: '',
            baseurl : '',
            executeSearch : false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
             this.searchForTweetsByName = this.searchForTweetsByName.bind(this);
    }

    
    componentDidMount() {
        this.getEnvVar(process.env)
    }

    componentDidUpdate() {
        if(this.state.clientKey != '' && this.state.bearer == ''&& this.state.error == false) {
           this.getBearer();
        }
        if(this.state.executeSearch==true) {
            this.getTweets();
        }
    }

    getEnvVar(env) {

        var secretstr = env.REACT_APP_NOT_SECRET_CODE;
        if (secretstr.length > 0) {
            var secrets = secretstr.split('==');
            for (let x=0; x<secrets.length; x++) {
                var secretvar = secrets[x].split('=');
                if (secretvar[0]=='client_key') {
                    this.setState({
                        'clientKey': secretvar[1]
                    })
                }
                if (secretvar[0]=='REACT_BASEURL') {
                    this.setState({
                        'baseurl': secretvar[1]
                    })
                }
            }
        }

    }

    getBearer() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key: this.state.clientKey })
        };
        fetch(this.state.baseurl + "/api/auth", requestOptions).then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                bearer: result.bearer
            });
            return;
        },
        (error) => {
        this.setState({
            isLoaded: false,
            error: true
        });
        return;
        })

        var _this = this
        setTimeout(function () {
            console.log(_this.state)
        },200)
    }

    handleInputChange(event) {
         console.log('i changed')
         this.setState = ({
            searchText: 'event.target.value'
        })
        var _this = this;
        //console.log(this)
        setTimeout(function () {
            console.log(_this.state)
        },2000)
    }

    getTweets() {
        console.log('tweets');
        console.log(this.state.searchText);
    }

    searchForTweetsByName() {
        console.log(this);
    //    if (this.state.bearer.length == 0) {
    //        this.bearer()
    //        var _this = this;
    //        setTimeout(function () {
    //            _this.setState({
    //                executeSearch: true
    //            })
    //        },1000);
    //    } else {
    //        this.setState({
    //            executeSearch: true
    //        })
    //    }

      
    }

   
    render() {
        
        return (
            <div className = "content" >
                <div className = "search-bar-wrap">
                    <p>To begin type in any Tweeter screen name</p>
                    <div className = "search-bar-row">
                        <input type = "text" id = "search-bar" onChange={this.handleInputChange}></input> 
                        <button onClick={this.searchForTweetsByName } id = "search-this">Lets Go</button>
                    </div>
                </div>
            </div>
        );
        }
}

export default Content;