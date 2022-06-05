import { useCallback, useEffect, useRef, useState } from 'react';
import './Canvas.css';

const canvasSize = 500;
const scale = 1;
const originX = 0;
const originY = 0;
const Canvas = () => {
    const [scaleFactor, setScaleFactor] = useState(1.0);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        // console.log('scaleFactor:', scaleFactor);
        const canvas = canvasRef.current;
        const context: any = canvas?.getContext('2d');
        context.clearRect(0, 0, canvas?.width, canvas?.height);
        context.fillStyle = "white";
        context.fillRect(originX, originY, canvasSize, canvasSize);
        canvas?.addEventListener("mousemove", (e: any) => {
            const x = e.layerX;
            const y = e.layerY;

            var pixel = context.getImageData(x, y, 1, 1);
            var data = pixel.data;
            const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
            // console.log(x, y);
            // console.log(rgba);
        });

    }, [scaleFactor]);

    const handleWheel = useCallback(
        (e: any) => {
            if (scaleFactor !== 0.1 && scaleFactor !== 4) {
                if(e.deltaY > 0) {
                    // console.log('scale up:', scaleFactor);
                    setScaleFactor(Math.round((scaleFactor + 0.1) * 10) / 10);
                } else if (e.deltaY < 0) {
                    // console.log('scale down:', scaleFactor);
                    setScaleFactor(Math.round((scaleFactor - 0.1) * 10) / 10);
                }
            }
        }, [scaleFactor, setScaleFactor]
    );

    const handleMouseMove = useCallback(
        (e: any) => {
            // console.log(e);
            const canvas = canvasRef.current;
            const rect: any = canvas?.getBoundingClientRect();
            console.log({x: e.clientX - rect.left, y: e.clientY - rect.top});
        }, []
    );

    // const resizeCanvas = () => {
    //     const canvas = canvasRef.current;
    //     const context: any = canvas?.getContext('2d');
    //     context.fillStyle = "white";
    //     context.fillRect(originX, originY, canvasSize / scaleFactor, canvasSize / scaleFactor);
    //     context.fillStyle = "black";
    //     context.fillRect(50,50,100,100);
    // }

    const memes = (e: any) => {
        console.log(e);
    }

    useEffect(() => {
        window.addEventListener("wheel", (e) => handleWheel(e));
        // window.addEventListener("mousemove", (e) => handleMouseMove(e));
        
        return () => {
            window.removeEventListener("wheel", (e) => handleWheel(e));
            // window.addEventListener("mousemove", (e) => handleMouseMove(e));
        };
    }, [handleWheel]);

    return (
        <div
            ref={wrapperRef}
            className="canvas-wrapper"
            style={{ width: canvasSize + "px", height: canvasSize + "px", transform: `scale(${scaleFactor})`}}>
            <canvas ref={canvasRef} width={canvasSize} height={canvasSize}/>
        </div>
    );
};

export default Canvas;