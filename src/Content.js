import React, { Component } from "react";

class Content2 extends Component {
    constructor() {
        super();
        this.state = {
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
  
    componentDidMount() {
        this.getEnvVar(process.env)
    }

    componentDidUpdate() {
        if(this.state.clientKey !==undefined && this.state.bearer == undefined && this.state.error == undefined) {
           this.getBearer();
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
          //  console.log(_this.state)
        },200)
    }

    onInputchange(event) {
        this.setState({
        [event.target.name]: event.target.value
        });
    }

    onSubmitForm() {
        console.log(this.state)
    }



    render() {
        const { items } = this.state;

        return (
        <div>
            <div className = "content" >
                    <div className = "search-bar-wrap">
                        <p>To begin type in any Tweeter screen name</p>
                        <div className = "search-bar-row">
                            <input type = "text" name="searchbar" id = "searchbar" value={this.state.searchbar} onChange={this.onInputchange}></input> 
                            <button onClick={this.onSubmitForm } id = "search-this">Lets Go</button>
                        </div>
                    </div>
            </div>
        </div>
        );
    }
}

export default Content2;