import { Form, Button } from "react-bootstrap";
import GrillaPeliculas from "./GrillaPeliculas";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";


const FormularioPelicula = () => {
const peliculasLocalStorage= JSON.parse(localStorage.getItem('peliculasKey')) || [] //leer

    const [peliculas, setPeliculas]= useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

useEffect (()=>{
    localStorage.setItem('peliculasKey', JSON.stringify(peliculas))
}) //guardar

  const posteriorValidacion = (pelicula) => {
    //todo agregar al objeto pelicula un id unico
    pelicula.id= crypto.randomUUID() 
       console.log(pelicula);
       reset()
       setPeliculas ([...peliculas, pelicula])

  };

  return (
    <section>
      <Form className="border p-3" onSubmit={handleSubmit(posteriorValidacion)}>
        {/* NOMBRE */}
        <Form.Group className="mb-3">
          <Form.Label>Nombre película</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ejemplo Titanic"
            {...register("nombrePelicula", {
              required: "El nombre de la película es un dato obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre de la película debe tener como mínimo 2 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "El nombre de la película debe tener como máximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombrePelicula?.message}
          </Form.Text>
        </Form.Group>

        {/* DESCRIPCION */}
        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Escribí una breve descripción"
            {...register("descripcion", {
              required: "La descripción de la película es un dato obligatorio",
              minLength: {
                value: 15,
                message:
                  "La descripción debe tener como mínimo 15 caracteres",
              },
              maxLength: {
                value: 250,
                message:
                  "La descripción debe tener como máximo 250 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>

        {/* CATEGORIA */}
        <Form.Group className="mb-3">
          <Form.Label>Categoría</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria de la pelicula es un dato oblogatorio",
            })}
          >
            <option value="">Seleccione una categoría</option>
            <option value="Terror">Terror</option>
            <option value="Comedia">Comedia</option>
            <option value="Aventura">Aventura</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      <GrillaPeliculas  peliculas= {peliculas}/>
    </section>
  );
};

export default FormularioPelicula;
