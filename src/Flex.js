import React from 'react';

class Flex extends React.Component {
    constructor(props) {
        super(props);
       // this.myStyle =  this.getHeight()
        this.binary = ['one', 'two', 'three']
      }

      componentDidMount() {
          
      }
       
    render() {

        return (
            <div className = "flex">             
                <div className = "middle">
                    <h2>Comming Soon</h2>
                    <ul>
                    <li><i className="fa fa-check" aria-hidden="true"></i>Check for bot tweeters</li>
                    <li><i className="fa fa-check" aria-hidden="true"></i>See a positivity score</li>
                    <li><i className="fa fa-check" aria-hidden="true"></i>Search for keywords</li>
                    <li><i className="fa fa-check" aria-hidden="true"></i>Compare tweets against users</li>
                    </ul>
                </div>
            </div>
          );
        }
}
export default Flex