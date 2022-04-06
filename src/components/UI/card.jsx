import React from 'react'
import {Card,Row,Col,Badge} from 'react-bootstrap'
import {Link } from 'react-router-dom'
function CustomCard({el}) {
  return (
    <div>
      
  <Col>
  <Card>
    <Link to={`/movie/${el.id}`}>
    <Card.Img variant="top" src={el.posterURL}/>
    </Link>
    
    <Card.Body>
      <Card.Title>{el.title}</Card.Title>
      <Card.Text>
        {el.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Badge pill bg={el.rating >7 ?"primary":"danger"}>
    {el.rating}
  </Badge>
  <Badge pill bg={"danger"}>
    {el.categorie.map (categ=> <Link to = {`/categorie/${categ}` } ><span>  {categ} /</span> </Link> )}
  </Badge>
    </Card.Footer>
  </Card>
</Col>

 
    </div>
  )
}

export default CustomCard