import React from 'react'
import { useParams } from 'react-router-dom'

const ViewProfileHelper = () => {
    const {id} = useParams();
  
  return (
    <div>ViewProfileHelper</div>
  )
}

export default ViewProfileHelper