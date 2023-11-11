import * as THREE from 'three';
import { useRef, useState , useEffect } from 'react';
import Sphere from '../shapes/sphere';


const Fog = () => {
    const scene = useRef();
    const [fog, setFog] = useState(null);

    // Set up the fog effect when the scene is mounted
    useEffect(() => {
        if (scene.current) {
            const color = new THREE.Color("rgb(5, 15, 45)");
            const near = 1;
            const far = 1;
            const fog = new THREE.Fog(color, near, far);
            scene.current.fog = fog;
            setFog(fog);
        }
    }, []);

    return (
        <scene ref={scene}>
            <Sphere position={[0, 0, 0]} args={[2, 64, 15]} color={"green"} text="Three JS" />
        </scene>
    );
}

export default Fog;