let left='<';
let right='>';

const Modal = ({
    clickedImg,
    setClickedImg,
    handelRotationRight,
    handelRotationLeft
  }) => {
    /*닫기기능 */
    const handleClick = (e) => {
      if (e.target.classList.contains("close")) {
        setClickedImg(null);
      }
    };
  
    return (
      <>
        <div className="modal close" onClick={handleClick}>
          <img src={clickedImg} alt="확대" />
          <span className="close" onClick={handleClick}>
            X
          </span>
          <div onClick={handelRotationLeft} className="arrows_left">{left}
          </div>
          <div onClick={handelRotationRight} className="arrows_right">{right}
          </div>
        </div>
      </>
    );
  };
  
  export default Modal;