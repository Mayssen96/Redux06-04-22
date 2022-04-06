import React from 'react'
import CustomCard from '../UI/card'
import {useParams} from 'react-router-dom'

function Movie({data}) { 
  const {id}=useParams()
  console.log(id)
  const Found=data.filter(el=> el.id==id)
  
  console.log(Found)


  return (
    <div>
      {Found[0].trailer}

    </div>
  )
}

export default Movie