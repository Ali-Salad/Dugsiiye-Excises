import { useState, useEffect } from 'react';


const MouseTracker = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCoords({ x: e.clientX, y: e.clientY })
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        };

    }, [])

    return (
        <>
            <p>mouse x:{coords.x}</p>
            <p>mouse y:{coords.y}</p>
        </>
    );

};

export default MouseTracker;