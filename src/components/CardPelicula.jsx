import { Card, Col } from "react-bootstrap";

const CardPelicula = () => {
    return (
        <Col>
         <Card >
      <Card.Body>
        <Card.Title>El conjuro 4</Card.Title>
        <Card.Text>
     A principios de los años 70, Ed y Lorrain Warren, reputados investigadores de fenómenos paranormales, se enfrentan a una entidad demoníaca al intentar ayudar a una familia que está siendo aterrorizada por una presencia oscura en su aislada granja.
        </Card.Text>
        <Card.Text>
            Categoria: Terror
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    );
};

export default CardPelicula;