import React from 'react'

export const Buscador = ({ search, setSearch }) => {

    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="buscador">Busca un personaje:</span>
                <input type="text" className="form-control" placeholder="Nombre del personaje..." aria-label="Nombre" aria-describedby="buscador"
                    value={search} onChange={(e) => {
                        setSearch(e.target.value);
                    }} />
            </div>
        </>
    )
}
