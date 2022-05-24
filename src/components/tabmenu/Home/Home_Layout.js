import React, { Component, useState, useRef } from "react";
import '../../PrivateSiteManager.css';
import Create from './Home_Create';
import Remove from './Home_Remove';
import './Home.css';



function Home2(){
    const [inputs, setInputs] = useState({
        taskname: ""
      });
      const { taskname } = inputs;
      const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
          ...inputs,
          [name]: value
        });
      };
      const [tasks, setTasks] = useState([

      ]);
    
      const nextId = useRef(1);
      const onCancel = () => {
        setInputs({
            taskname: ""
          });
  
      }
      const onCreate = () => {
        const user = {
          id: nextId.current,
          taskname
        };
        setTasks(tasks.concat(user));
    
        setInputs({
          taskname: ""
        });
        nextId.current += 1;
      };
    
      const onRemove = (id) => {
        setTasks(tasks.filter((user) => user.id !== id));
      };
      return (
        <>
          <Create taskname={taskname} onChange={onChange} onCreate={onCreate} onCancel={onCancel}/>
          <Remove tasks={tasks} onRemove={onRemove} />
        </>
      );
    }

export default Home2;
