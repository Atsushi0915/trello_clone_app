// eslint-disable-next-line
import React from "react"

export const TaskCardDeleteButton = (props) => {
  const { taskCardsList, setTaskCardsList, taskCard } = props

  const taskCardDeleteButton = (id) => {
    console.log(id)
    console.log(taskCardsList)
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
    console.log(taskCardsList)
  };

  return (
    <>
      <button 
        className="taskCardDeleteButton" 
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        ×
      </button>
    </>
  )
}