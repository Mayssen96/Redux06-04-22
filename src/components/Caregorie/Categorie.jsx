import React from 'react'
import {useParams} from 'react-router-dom'
import CustomCard from '../UI/card'
import {Row} from 'react-bootstrap'
function Categorie({data}) {
    let {categorie}= useParams()
   const movies = data.filter (movie => movie.categorie.includes(categorie))
   //console.log ("movies:", movies)
  return (
    <div>
        <Row xs={2} md={3} className="g-4">
        {movies.map (el=> 
          <CustomCard el = {el}/>
          )}
  
  </Row>
    </div>
  )
}

export default Categorie