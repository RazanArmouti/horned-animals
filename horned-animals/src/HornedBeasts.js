import React, { Component } from 'react'

 class HornedBeasts extends Component {
    render() {
        return (
            <div>
                {/* <h1>hi</h1> */}

               <h2> title:{this.props.title} </h2>
             
               {/* <img src="" alt ="" title="" id="img1"> imageUrl: {this.props.imageUrl} </img> */}
              
               <img src={`${this.props.imageUrl}`} alt ="" title=""></img>
               <p> description:{this.props.description} </p>
            </div>
        )
    }
}

export default HornedBeasts
