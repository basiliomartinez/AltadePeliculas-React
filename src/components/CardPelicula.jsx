import { Card, Col } from "react-bootstrap";

const CardPelicula = ({pelicula}) => {
    return (
        <Col>
         <Card >
      <Card.Body>
        <Card.Title>{pelicula.nombrePelicula}</Card.Title>
        <Card.Text>
  {pelicula.descripcion}
        </Card.Text>
        <Card.Text>
        {pelicula.categoria}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    );
};

export default CardPelicula;