import React from 'react'

export const Footer = () => {
    return (
        <>
        <div className='footer'>
            <h6 className='footer-left'>{new Date().getFullYear().toString()}</h6>
            <h6 className='footer-center'>Todos los derechos reservados</h6>
            <h6 className='footer-right'><a href="https://web.dragonball-api.com/" target='_blank'>https://web.dragonball-api.com/</a></h6>
        </div>
    </>        
    )
}
