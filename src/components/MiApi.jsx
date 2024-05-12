import React, { useEffect, useState } from 'react'

export const MiApi = ({ search }) => {

    const url = "https://dragonball-api.com/api/characters?limit=20";

    const [personajesApi, setPersonajesApi] = useState([]);

    const getPersonajes = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            const personajes = result.items;

            personajes.sort((a, b) => a.name.localeCompare(b.name));

            setPersonajesApi(personajes);

        } catch (error) {
            console.error(`Ha ocurrido un error: ${error.message}`);
        }
    }

    useEffect(() => {
        getPersonajes();
    }, []);


    let personajesFiltrados = [];

    if (search === "") {
        personajesFiltrados = personajesApi;
    }
    else {
        personajesFiltrados = personajesApi.filter((personaje) => {
            return personaje.name.toLowerCase().includes(search.toLowerCase());
        });
    }

    
    return (
        <>
            <div className="contenedor">
                {
                    personajesFiltrados.map((personaje, id) => {
                        return (
                            <div key={id} className="card">
                                <img src={personaje.image} className="card-img-top" alt={personaje.name} />
                                <div className="card-body">
                                    <h4 className="card-title">{personaje.name} <span className="raza">({personaje.race})</span></h4>
                                    <p className="card-text">{personaje.description.substring(0, 200)}...</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {
                personajesFiltrados.length === 0 ? <p>No se encontraron resultados</p> : " "
            }
        </>
    )
}
