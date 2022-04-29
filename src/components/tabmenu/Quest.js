import React, { Component } from "react";
import '../PrivateSiteManager.css';

class Quest extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
          <section id="content_quest">요청</section>
          )
    }
  }
  
  
  export default Quest;