import React, { useEffect, useRef } from 'react';
import './style.css';

export function HomeCanvas(props) {

    const canvasRef = useRef(null)

    useEffect(() => {
        
        const homecanvas = canvasRef.current
        const context = homecanvas.getContext('2d') 
        racetrack.width = window.innerWidth

    }, [])

    return(
        <canvas ref={canvasRef} {...props} id='homecanvas'></canvas>
    )
}