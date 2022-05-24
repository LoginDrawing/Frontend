import React from "react";
import './Home.css';


function User({ user, onRemove }) {
  return (
    <div className="home_remove">
        <div className="home_remove_image">image</div>
        <div className="home_remove_post">
            <div className="home_remove_post_info">
                <div className="home_remove_post_name"><b>이름</b></div>
                <div className="home_remove_post_date">2021.02.15</div>
            </div>
            <div className="home_remove_post_list">{user.taskname}</div>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    </div>
  );
}

function UserList({ tasks, onRemove }) {
  return (
    <div>
      {tasks.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserList;