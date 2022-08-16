import React from "react"

export const Task = (props) => {
  const { task, taskList, setTaskList } = props

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  }
  console.log(task)
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button 
        className="taskTrashButton"
        onClick={()=> handleDelete(task.id)}
      >
        削除
      </button>
    </div>
  )
}