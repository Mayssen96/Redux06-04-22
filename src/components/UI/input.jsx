import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'
function Input({setTitle,placeholder,onChange,type}) {
  return (
    <div>
      <InputGroup className="mb-3">
    
    <FormControl
      type = {type}
       onChange = {onChange}
      placeholder={placeholder}
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
    </div>
  )
}

export default Input