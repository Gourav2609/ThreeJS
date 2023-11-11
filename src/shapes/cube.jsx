import * as THREE from "three"; 
import { useRef} from "react";
import { useFrame } from "@react-three/fiber";


const Cube = ({ position, size, color }) => {
    const ref = useRef();
    useFrame((state, delta) => {
        // ref.current.rotation.x += delta;
        // ref.current.rotation.y += delta;
        // ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 2;
        console.log(state.clock.getElapsedTime());
    });
    
    return (
        <mesh position={position} ref={ref}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={color} wireframe />
        </mesh>
    );
    };


    export default Cube;