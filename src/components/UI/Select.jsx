import React from 'react'
import {Form} from 'react-bootstrap'

function Select({setRating}) {
  return (
    <div>
        <Form.Select aria-label="Default select example" 
        onChange={e=>setRating(e.target.value)}>   
        <option>Select by rating</option>   
        {Array.from({ length: 10}).map((_, idx) =>   <option value={idx+1}>{idx+1}</option>   )} 
        </Form.Select>





    </div>
  )
}

export default Select