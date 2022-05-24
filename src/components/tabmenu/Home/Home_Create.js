import React from "react";
import './Home.css';
import pencil from '../../style/image/pencil.svg';
import flower from '../../style/image/flower.svg';


function HomeCreate({ taskname, onChange, onCreate, onCancel }) {
  return (
        <div className="home_create">
          <div className="home_create_top">
            <img src={pencil}/>그리움을 담은 한 마디를 그려보세요

          </div>
          <div className="middle">
              <img src={flower}/>
              <textarea
                name="taskname"
                placeholder="고인에 관한 허위사실 및 비방을 게시하는 경우 댓글이 삭제 되거나 고발될 수 있습니다. 건전한 추모문화와 양질의 댓글 문화를 위해, 타인에게 불쾌감을 주는 욕설 또는 특정 계층/민족, 종교 등을 비하하는 단어들은 표시가 제한됩니다."
                onChange={onChange}
                value={taskname}
              />
          </div>
          <button className="cancel_button" onClick={onCancel}>취소</button>
          <button className="create_button" onClick={onCreate}>등록</button>
        </div>
  );
}

export default HomeCreate;