import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import DefaultImage from '../../src/NoImage.png';
import { StyledLoading, StyledSingleInfo, StyledSingleMovie } from '../Styles';

const SingleMovie = () => {
    const { id } = useParams();
    const { isLoading, error, data } = useFetch(`&i=${id}`);

    if (isLoading) {
        return <StyledLoading></StyledLoading>
    }

    const { Poster, Title, Plot, Year, Country, Director, Released, Runtime } = data;
    let image = Poster === "N/A" ? DefaultImage : Poster;

    return (
        !isLoading ?
            <StyledSingleMovie> 
                <img src={image} alt={Title} /> 
                <StyledSingleInfo>   {/**Creo los parrafos con la informacion de la película y muestra la información del json */}
                    <h2>{Title}</h2>
                    <p>{Plot}</p>
                    <p><strong>País: </strong>{Country}</p>
                    <p><strong>Director: </strong>{Director}</p>
                    <p><strong>Día de lanzamiento: </strong>{Released}</p>
                    <p><strong>Año: </strong>{Year}</p>
                    <p><strong>Duración: </strong>{Runtime}</p>
                </StyledSingleInfo>
            </StyledSingleMovie>
            : ''
    );
};



export default SingleMovie;