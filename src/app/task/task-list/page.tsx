'use client';
import { useState } from "react";
import AddTaskModal from "./component/AddTask";

const TaskList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onAddTaskClose = () => {
        console.log("Add task modal closed");
    }
return(
    <div className="">
    <button type="button" onClick={()=>setIsOpen(true)}>Add Task</button>
    <AddTaskModal isOpen={isOpen} onClose={ onAddTaskClose}/>
    <div>Task List</div>
    </div>
)
}

export default TaskList;