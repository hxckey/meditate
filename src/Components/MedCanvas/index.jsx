import React, { useRef, useEffect } from 'react';

export function MedCanvas(props) {

    const canvasRef = useRef(null)

    useEffect(() => {

        let medCanvas = canvasRef.current;
        let ctx = medCanvas.getContext('2d');
        medCanvas.width = window.innerWidth;
        medCanvas.height = window.innerHeight;

        let particles = 100;
        let angle = 360 / particles;
        // let angle = 3.6;
        let size = 200;
        let x;
        let y;
        let xCoords = [];
        let yCoords = [];
        ctx.translate(medCanvas.width / 2, medCanvas.height / 2)

        function init() {
            for(let i = 0; i < particles; i++){
                x = size * Math.sin(angle)
                y = size * Math.cos(angle)
                angle ++;
                xCoords.push(x)
                yCoords.push(y)
            }
            size ++;
            requestAnimationFrame(init)
        }
        
        function draw() {
            for( let i = 0; i < particles; i++){

                ctx.beginPath()
                ctx.fillStyle = 'white'
                ctx.arc(xCoords[i], yCoords[i], Math.random() * 20, 0, Math.PI * 2, false)
                ctx.fill();
                ctx.stroke();
            }
            
        }
        init();
        draw();



    }, [])

    return (
        <canvas ref={canvasRef} {...props} id="medCanvas"></canvas>
    )
}
