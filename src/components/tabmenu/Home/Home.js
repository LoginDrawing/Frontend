import React, { Component } from "react";
import '../../PrivateSiteManager.css';
import Home from './Home_Layout';

class Homes extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
          <section id="content_home">
                <div class="content_home_title">"FOREVER MISSED"</div>
                <div class="content_home_content">
                    Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet prompta reformidans.
                </div>
                <div class="content_home_write">
                  <Home/>
                </div>
            </section>
        )
    }
  }
  
  
  export default Homes;