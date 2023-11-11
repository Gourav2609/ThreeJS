import * as THREE from "three";
import { useRef, useState } from "react";


const Torus = ({position , args , color}) =>{

    const ref = useRef();

    useFrame((state , delta)=>{
        ref.current.rotation.x += delta;
        ref.current.rotation.y += delta;
    })

    return (
        <mesh position={position}>
            <torusGeometry args={args} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}