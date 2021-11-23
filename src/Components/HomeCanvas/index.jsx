import React, { useEffect, useRef } from 'react';
// import './style.css';

export function HomeCanvas(props) {

    const canvasRef = useRef(null)

    useEffect(() => {
        
        const homecanvas = canvasRef.current
        const context = homecanvas.getContext('2d') 
        homecanvas.width = window.innerWidth
        homecanvas.height = window.innerHeight

        class Bubble {
            constructor(xpos, ypos, r, growth) {
                this.xpos = xpos;
                this.ypos = ypos;
                this.r = r;
                this.growth = growth;

                this.radGrowth = 1 * this.growth;
            }

            drawBubble(context) {
                context.beginPath();
                context.arc(this.xpos, this.ypos, this.r, 0, Math.PI * 2, false)
                context.stroke();
            }

            growBubble() {
                context.clearRect(0, 0, homecanvas.width, homecanvas.height);
                this.drawBubble(context);

                if(this.r > 500) this.radGrowth = -this.radGrowth;

                if(this.r < 10) this.radGrowth = -this.radGrowth;

                this.r += this.radGrowth
            }
        }

        // let bubble1 = new Bubble(200, 200, 35, 2);
        // bubble1.drawBubble(context);
        
        for (let i = 0; i < 25; i++){
            let bubbles = new Bubble(Math.floor(Math.random() * homecanvas.width), Math.floor(Math.random() * homecanvas.height), 20, 3)
            bubbles.drawBubble(context);
            
            let updateBubble = () => {
                requestAnimationFrame(updateBubble)
                bubbles.growBubble();
            }
            
            updateBubble();
        }


    }, [])

    return(
        <canvas ref={canvasRef} {...props} id='homecanvas'></canvas>
    )
}