import React from 'react';

class Flex extends React.Component {
    constructor(props) {
        super(props);
       // this.myStyle =  this.getHeight()
        this.binary = ['one', 'two', 'three']
      }

      componentDidMount() {
          
      }
       
      //  const rightele = document.getElementsByClassName('right')

      //  if (rightele.length === 1) {
      //      let rightheight = rightele[0].clientHeight
     //       console.log(rightele[0].children)
     //       let overlay = rightele[0].children
     //       if (overlay.length >= 1) {
     //           if (overlay[0].getAttribute('class')==='overlay') {
     //               console.log('yep i am here')
     //               overlay[0].style.height = rightheight = 'px'
     //           }
     //       }
     //   }
    //}
    render() {
      //  const setText = function () {
      //     setTimeout(function () {
      //        console.log('hi')
      //     },1000)
      //  }
       

       
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