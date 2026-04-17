import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { get } from "../data/httpClient";
import { getMovieImg } from "../Utils/GetMovieImg";
import "../Pages/MovieDetails.css";

export function MovieDetails() {
 
  const { movieId } = useParams(); 
  

  const [movie, setMovie] = useState(null); 
  const [generos, setGeneros] = useState([]);
   
  useEffect(() => {get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres);
    });
  }, [movieId]);

  
  if (!movie) {
    return <div>Cargando...</div>;
  }

  const imageUrl = getMovieImg(movie.poster_path, 500);
  
  return (
    <div className="detailscontainer"> 
      <img 
        src={imageUrl}
        alt={movie.title} 
        className="col movieImage"
      />
      <div className="col movieDetails">
        <p className="firstItem">
          <strong>Titulo: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genero: </strong>
          
          {generos.map((genero) => genero.name).join(", ")}
        </p>
         <p>
          <strong>Descripcion: </strong>
          {movie.overview}
        </p>
      </div>
    </div> 
  );
}