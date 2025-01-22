'use client';
import { useState } from "react";
import AddTaskModal from "./component/AddTask/AddTask";
import TaskTable from "./component/Table/TaskTable";

const TaskList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onAddTaskClose = () => {
        setIsOpen(false);
    }
return(
    <div className="w-full h-full">
    <button type="button" onClick={()=>setIsOpen(true)}>Add Task</button>
    <AddTaskModal isOpen={isOpen} onClose={ onAddTaskClose}/>
    <div><TaskTable/></div>
    </div>
)
}

export default TaskList;