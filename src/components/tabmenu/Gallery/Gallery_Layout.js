import React, { Component, useState } from "react";
import Modal from './Gallery_Modal';
import data from '../../data/images.json';
import '../../PrivateSiteManager.css';


function Gallery2() {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
  
    const handleClick = (item, index) => {
      setCurrentIndex(index);
      setClickedImg(item.link);
    };
  
    const handelRotationRight = () => {
      const totalLength = data.data.length;
      if (currentIndex + 1 >= totalLength) {
        setCurrentIndex(0);
        const newUrl = data.data[0].link;
        setClickedImg(newUrl);
        return;
      }
      const newIndex = currentIndex + 1;
      const newUrl = data.data.filter((item) => {
        return data.data.indexOf(item) === newIndex;
      });
      const newItem = newUrl[0].link;
      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    };
  
    const handelRotationLeft = () => {
      const totalLength = data.data.length;
      if (currentIndex === 0) {
        setCurrentIndex(totalLength - 1);
        const newUrl = data.data[totalLength - 1].link;
        setClickedImg(newUrl);
        return;
      }
      const newIndex = currentIndex - 1;
      const newUrl = data.data.filter((item) => {
        return data.data.indexOf(item) === newIndex;
      });
      const newItem = newUrl[0].link;
      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    };
  
    return (
      <div className="wrapper">
        {data.data.map((item, index) => (
          <div key={index} className="wrapper_images">
            <img
              src={item.link}
              onClick={() => handleClick(item, index)}
            />
          </div>
        ))}
        <div>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
      </div>
    );
  }
  
  export default Gallery2;