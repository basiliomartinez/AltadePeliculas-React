import{Row} from"react-bootstrap"
import CardPelicula from "./CardPelicula";

const GrillaPeliculas = () => {
    return (
              <Row xs={1} md={2} lg={4} className="mt-4 gap-3">
       <CardPelicula></CardPelicula>
    
      </Row>
    );
};

export default GrillaPeliculas;