import React, { Component, useState } from "react";
import '../../PrivateSiteManager.css';
import like from "../../style/image/like.svg";
import onlike from "../../style/image/onlike.svg";
import plus from "../../style/image/plus.png";
import question from "../../style/image/quest.png";


function Timeline2(){
    let [year, setYear]=useState(['2016', '2017', '2015']);

    return(
        <>
            <div className="post"> 
                <Postyear year={year[1]}/>
                <div className="postlist">
                    <Postbox />
                    <Postbox />
                    <Postbox />
              </div>
              <Postyear year={year[0]}/>
              <div className="postlist">
                    <Postbox />
                    <Postbox />
            </div>
            </div>
            <img className="img_plus" src={plus}></img>
            <img className="img_question" src={question}></img>
        </>

    );
}

function Postyear(props){
    return(
        <div className="postyear">
        <div className="postyear_circle"><div></div></div>
        <div className="postyear_year">{props.year}</div>
      </div>
    )
}

function Postbox(){
    return(
        <div className="postbox">
            <div className="postbox_gallery">
            
            </div>
            <div className="postbox_write">

            </div>
            <div className="postbox_etcs">
              <div className="postbox_etc">
                <div className="postbox_etcs_year">년도</div>
                <div className="postbox_etcs_block"></div>
                <div className="postbox_etcs_location">장소</div>
              </div>
              <div className="postbox_etcs_like"><img src={like}/></div>
            </div>
        </div>
    )
}

export default Timeline2;