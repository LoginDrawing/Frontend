import React, { Component } from "react";
import '../PrivateSiteManager.css';


class Timeline extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
          <section id="content_timeline">타임라인</section>
        )
    }
  }
  
  export default Timeline;