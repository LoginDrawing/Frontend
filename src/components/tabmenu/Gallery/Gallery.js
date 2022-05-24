import React, { Component, useState } from "react";
import Gallery_Layout from './Gallery_Layout';
import '../../PrivateSiteManager.css';


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
                <Gallery_Layout />
            </section>
        )
    }
  }
  
  
  export default Gallery;