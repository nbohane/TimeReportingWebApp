import {useEffect, useState} from "react";
import Task from "./task";

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        //API CALL GOES HERE
    }, []);

    return (
        <div>
            {tasks.map((task, i) => {
                return (
                    <Task key={i} data={task}/>
                )
            })}
        </div>
    )
}

export default TaskList;
