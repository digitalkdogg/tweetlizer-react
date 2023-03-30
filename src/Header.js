import React from 'react';
import bluebg from './space-bg.jpg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //key : this.props
        };
    }

    render() {
  
        return (
            <div className="header" style={{ backgroundImage:`url(${bluebg})`}}>
                
                <h1>Tweetlizer.com</h1>

            </div>
        );
        }
}

export default Header;
