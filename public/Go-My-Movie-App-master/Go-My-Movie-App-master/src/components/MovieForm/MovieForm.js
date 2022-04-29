import { useEffect, useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import "./movieform.css";
import { v4 as uuidv4 } from "uuid";

const MovieForm = ({ isEdit, addMovie, id, movies, setMovies }) => {
  const [modalShow, setModalShow] = useState(false);
  const [movie, setMovie] = useState({});

  const [title, setTitle] = useState("");

  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [year, setYear] = useState("");
  const [trailer, setTrailer] = useState("");
  const [link, setLink] = useState("");
  const [rate, setRate] = useState(0);

  const findMovie = () => {
    setMovie(movies && movies.find((el, i) => el.id === id));
  };

  useEffect(() => {
    findMovie();
    if (isEdit) {
      setTitle(movie.title);
      setDesc(movie.desc);
      setImage(movie.image);
      setTrailer(movie.trailer);
      setRate(movie.rate);
      setLink(movie.link);
      setYear(movie.year);
    } else {
      setTitle("");
      setDesc("");
      setImage("");
      setTrailer("");
      setRate(0);
      setLink("");
      setYear("");
    }
  }, [isEdit, movie]);

  const add = (e) => {
    e.preventDefault();
    let newMovie = {
      title,
      image,
      desc,
      year,
      trailer,
      link,
      rate,
      id: uuidv4(),
    };

    if (
      title === "" ||
      year === "" ||
      image === "" ||
      link === "" ||
      trailer === "" ||
      desc === ""
    )
      return alert("Missing some fields");

    if (rate === 0) return alert("Rate must be above of zero");

    addMovie(newMovie);
    setTitle("");
    setDesc("");
    setImage("");
    setTrailer("");
    setRate(0);
    setLink("");
    setYear("");
    setModalShow(false);
  };

  const edit = (e) => {
    e.preventDefault();
    let updatedMovie = {
      title,
      image,
      desc,
      year,
      trailer,
      link,
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
        centered
      >
        <Modal.Header closeButton onClick={() => setModalShow(false)}>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="test"
                  value={title}
                  placeholder="Enter movie title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  value={year}
                  placeholder="Enter movie year"
                  onChange={(e) => setYear(e.target.value)}
                />
              </Form.Group>
            </Row>

            {/* <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" placeholder="Enter movie rate" />
          </Form.Group> */}

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Movie Image</Form.Label>
              <Form.Control
                placeholder="Enter movie image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Movie Link</Form.Label>
              <Form.Control
                placeholder="Enter movie link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Movie Trailer</Form.Label>
              <Form.Control
                placeholder="Enter movie trailer"
                value={trailer}
                onChange={(e) => setTrailer(e.target.value)}
              />
            </Form.Group>

            <Form.Control
              as="textarea"
              placeholder="Leave a description here"
              style={{ height: "100px" }}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Rate movie</Form.Label>
              <Form.Control
                placeholder="Rate movie"
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                isEdit ? edit(e) : add(e);
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MovieForm;
