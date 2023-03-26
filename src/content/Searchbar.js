import React from 'react';

class Searchbar extends React.Component {
    render() {
  
        return (
            <div className = "search-bar-wrap">
                <p>To begin type in any Tweeter screen name</p>
                <div className = "search-bar-row">
                    <input type = "text" id = "search-bar"></input> <button id = "search-this">Lets Go</button>
                </div>
            </div>
        );
        }
}

export default Searchbar;