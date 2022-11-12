import React from "react";
import {FaTimes} from "react-icons/fa";

export default function Task({task,deleteHandler}){
    return(
        <li key={task.id}>
            <div className="taskcontain">
                <div className="icon">
                    <p>{task.title}</p>
                    <FaTimes onClick={()=>deleteHandler(task.id)}/>
                </div>
            </div>
        </li>
    );
}