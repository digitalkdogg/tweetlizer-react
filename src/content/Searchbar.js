import React from 'react';

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bearer : ''
        }
    }

    componentWillMount() {
        this.setState({'bearer':  this.props.bearer })
        var _this = this;
        setTimeout(function () {
            console.log('search');
            console.log(_this.state)
        },1000)
    }

    render() {
  
        return (
         <div></div>
        );
        }
}

export default Searchbar;