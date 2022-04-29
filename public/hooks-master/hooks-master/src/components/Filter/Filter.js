import React from 'react'
import {Form,FormControl,Button} from 'react-bootstrap'
import "./filter.css"
const Filter = (setSearchTxt) => {
  return (
    <div>
        <Form>
    <FormControl
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      onChange={(e) => setSearchTxt(e.target.value)}
      
    />
    <Button variant="outline-success">Search</Button>
  </Form>
  </div>
  )
}

export default Filter