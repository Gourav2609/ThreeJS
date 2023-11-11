import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
import Sphere from './shapes/sphere';
import { useEffect } from 'react';

const ThreeJS = () => {

  let sphereSize = Math.min(window.innerWidth, window.innerHeight) / 400;

  useEffect(() => {
    const handleResize = () => {
      // Update sphereSize based on new window dimensions
      sphereSize = Math.min(window.innerWidth, window.innerHeight) / 400;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log(sphereSize);
    };
    
  }, []);

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 5] }} // Adjust the camera position
        // fog={new THREE.Fog("rgb(5, 15, 45)", 5, 15)} // Add fog to the scene
      >
        {/* <directionalLight position={[0, 0, 2]} /> */}
        <ambientLight intensity={10} />

        <Sphere position={[0, 0, 0]} args={[sphereSize, 64, 32]} color={"green"} text="Three JS" />
        <OrbitControls enableZoom={false}/>
      </Canvas>
    </>
  );
};

export default ThreeJS;
