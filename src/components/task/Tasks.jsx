import React from "react"

import { Task } from "./Task"

export const Tasks = (props) => {
  const { taskList, setTaskList } = props

  return (
    <>
      {taskList.map((task, index) => (
        <div key={index}>
          <Task 
            task={task} 
            taskList={taskList} 
            setTaskList={setTaskList} 
          />
        </div>
      ))}
    </>
  )
}