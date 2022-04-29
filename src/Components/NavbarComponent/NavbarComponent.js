import React from 'react';
import { Navbar , Container,Nav } from 'react-bootstrap';
import Rate from "../Filter/Rate";
import Stars from '../Stars/Stars';
import  AddMovie  from "../AddMovie/AddMovie";

const NavbarComponent = ({ setSearchTxt, setSearchRate, searchRate, addMovie,setMovies,rate }) => {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Movies List</Nav.Link>
      <Rate 
      setSearchTxt={setSearchTxt}
       />
      <Stars isEdit={true}
       rate={rate}
       setSearchRate={setSearchRate}
       searchRate={searchRate}
        />
        <AddMovie 
        isEdit={false}
        addMovie={addMovie}
        setMovies={setMovies}
        />
    </Nav>
    </Container>
  </Navbar>

            
        </div>
    );
}

export default NavbarComponent;
