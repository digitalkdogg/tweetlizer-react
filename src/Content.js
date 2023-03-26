import React from 'react';

import Searchbar from './content/Searchbar';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            clientKey : '',
            bearer: '',
            bollman: '',
            baseurl : 'http://localhost:8000' //need to move to env variable
        }
    }

    
    componentWillMount() {
        this.getEnvVar(process.env)
        var _this = this
        setTimeout(function () {
            console.log(_this.state)
        },200)
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
    render() {
        
        return (
            <div className = "content" >
                <Searchbar />
            </div>
        );
        }
}

export default Content;