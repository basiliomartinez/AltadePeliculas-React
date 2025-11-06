import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormularioPelicula from './components/FormularioPelicula';
function App() {
 
  return (
    <>
      <Container className='my-5'> 
        <h1 className='text-center'>Alta de Peliculas</h1>
       <FormularioPelicula></FormularioPelicula>
      </Container>
    </>
  )
}

export default App
