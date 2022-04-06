import React from "react";


const Note = () => {
  return (
    <div className="card-body note border w-25 p-3 mt-3" style={{boxShadow: "0 0 2px 1px rgba(0,0,0, 0.3)"}}>
      <h1>Title</h1>
        <p>Info</p>
    </div>
  )
}
export default Note;