import React from 'react';

class Flex extends React.Component {
    constructor(props) {
        super(props);
       // this.myStyle =  this.getHeight()
        this.binary = ['one', 'two', 'three']
      }

      componentDidMount() {
            var interval = setInterval(function () {
             
            //    this.binary = delete this.binary[0]
            },2000)
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
                <div className = "overlay"></div>
                <div className = "left">
                    <h2>Comming Soon</h2>
                    <ul>
                    <li><i className="fa fa-check" aria-hidden="true"></i>Check for bot tweeters</li>
                    <li><i className="fa fa-check" aria-hidden="true"></i>See a positivity score</li>
                    <li><i className="fa fa-check" aria-hidden="true"></i>Search for keywords</li>
                    <li><i className="fa fa-check" aria-hidden="true"></i>Compare tweets against users</li>
                    </ul>
                </div>
                <div className = "right">
                        <p className = "binary">
                        <span>01110100</span>
                        <span>01110111</span> 
                        <span>01100101</span>
                        <span>01100101</span> 
                        <span>01110100</span>
                        <span>01101100</span> 
                        <span>01101001</span>
                        <span>01111010</span>
                        <span>01100101</span>
                        <span>01110010</span>
                        <span>00101110</span>
                        <span>01100011</span>
                        <span>01101111</span>
                        <span>01101101</span>
                        </p>
                    </div>
            </div>
          );
        }
}
export default Flex