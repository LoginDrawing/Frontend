import React, { Component, useState } from "react";
import '../../PrivateSiteManager.css';
import Timeline_Layout from './Timeline_Layout';

class Timeline extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }


    render(){
        return(
          <section id="content_timeline">
            <Timeline_Layout />
          </section>            

        )
    }

  }
  
  export default Timeline;