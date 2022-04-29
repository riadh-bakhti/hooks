import React from 'react';
import { Button, Modal, Form } from "react-bootstrap";
import { useState,useEffect } from "react";
import  Stars  from "../Stars/Stars";

const AddMovie = ({movies,isEdit,id,addMovie,setMovies}) => {
    const [modalShow, setModalShow] = useState(false);
    const [movie, setMovie] = useState({});
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [rate, setRate] = useState(0);
    const findMovie = () =>{
      setMovie(movies && movies.find((el,i) => el.id === id));
    };
    useEffect(() => {
      findMovie();
      if (isEdit) {
        setTitle(movie.title);
        setDesc(movie.desc);
        setImg(movie.image);
        setRate(movie.rate);
        setYear(movie.year);
      } else {
        setTitle("");
        setDesc("");
        setImg("");
        setRate(0);
        setYear("");
      }
    }, []);
    const add = (e) => {
      e.preventDefault();
      let newMovie = {
        title,
        img,
        desc,
        year,
        rate,
        id: Math.random(),
      };
  
      if (
        title === "" ||
        year === "" ||
        img === "" ||
        desc === ""
      )
        return alert("Missing some fields");
  
      if (rate === 0) return alert("Rate must be above of zero");
  
      addMovie(newMovie);
      setTitle("");
      setDesc("");
      setImg("");
      setRate(0);
      setYear("");
      setModalShow(false);
    };
  
    const edit = (e) => {
      e.preventDefault();
      let updatedMovie = {
        title,
        img,
        desc,
        year,
        rate,
        id: movie.id,
      };
  
      setMovies(
        movies.map((el, i) => (el.id === movie.id ? { ...updatedMovie } : el))
      );
  
      setModalShow(false);
    };
  
    
    return (
        
    <>
      <Button
        variant="light"
        className="addbutton"
        onClick={() => setModalShow(true)}
      >
        {isEdit ? "Edit Movie" : "Add Movie"}
      </Button>

      <Modal 
        show={modalShow} 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton onClick={() => setModalShow(false)}>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header >
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e)=>setTitle(e.target.value)}
                autoFocus
              />
              <Form.Label>year</Form.Label>
              <Form.Control
                type="text"
                value={year}
                placeholder="year"
                onChange={(e)=>setYear(e.target.value)}
                autoFocus
                />
                <Form.Label>desc</Form.Label>
              <Form.Control
                type="text"
                value={desc}
                placeholder="description"
                onChange={(e)=>setDesc(e.target.value)}
                autoFocus
                />
                <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Movie Image</Form.Label>
              <Form.Control
                placeholder="Enter movie image"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </Form.Group>
                <Stars rate={rate} isEdit={true} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>desc</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => {
                isEdit ? edit(e) : add(e);
              }}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        
    );
}

export default AddMovie;
