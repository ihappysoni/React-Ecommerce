import React from "react"

const Details = (props) => {
  return (
    <div className="details__topic">
      <img src={props.img} alt="features" />
      <h2>{props.heading}</h2>
      <h2>This is detail .</h2>
    </div>
  )
}

export default Details
