import React, { Component, useState } from "react";
import Gallery2 from './Gallery2';
import '../PrivateSiteManager.css';


class Gallery extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }
  
    render(){
      
        return(
          <section id="content_gallery">
                <Gallery2 />
            </section>
        )
    }
  }
  
  
  export default Gallery;