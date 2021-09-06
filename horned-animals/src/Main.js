import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import dataList from './data.json'

class Main extends Component {

  render() {

    return (
      <>
        {
          dataList.map(element => {
            console.log(element.title);
            return <HornedBeasts title={element.title} imageUrl={element.image_url} description={element.description} keyword={element.keyword} horns={element.horns}/>

          })

        }

      </>




    )
  }
}

export default Main

