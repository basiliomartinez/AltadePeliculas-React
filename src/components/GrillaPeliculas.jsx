import{Row} from"react-bootstrap"
import CardPelicula from "./CardPelicula";

const GrillaPeliculas = ({peliculas}) => {
    return (
              <Row xs={1} md={2} lg={4} className="mt-4 gap-3">
                {
                    peliculas.map((peliculas)=><CardPelicula key={peliculas.id} pelicula={peliculas}></CardPelicula>)
                }
       
    
      </Row>
    );
};

export default GrillaPeliculas;