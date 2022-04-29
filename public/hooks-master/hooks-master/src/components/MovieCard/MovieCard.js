import React from 'react'
import { Card, Button } from 'react-bootstrap';
import "./card.css"
import Stars from '../Stars/Stars';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie: { title, image, desc, year, rate, id } }) => {
    return (
        <div >
            <Card style={{ width: '18rem', height: '53rem'}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title> 
                    <Card.Text>
                        {desc} <br />
                        {year} <br />
                        <Stars rate={rate} isEdit={false} />

                    </Card.Text>
                    <Link to={`/Details/${ id }`}>
                    <Button variant="primary">Show more</Button>
                    </Link>
                </Card.Body>
            </Card>



        </div>)
}

export default MovieCard