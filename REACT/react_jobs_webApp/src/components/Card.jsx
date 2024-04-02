import React from 'react'

const Card = ({ cardData, bg = "bg-gray-100" }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      {cardData}
    </div>
  )
}

export default Card
