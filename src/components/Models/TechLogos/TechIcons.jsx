import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


const TechIcons = ({model}) => {

    const loader = new GLTFLoader();

  loader.load(
    "/models/react_logo-transformed.glb",
    (gltf) => {
      scene.add(gltf.scene);
    },
    undefined,
    (error) => {
      console.error("GLB Load Error:", error);
    }
  );
    
    const scene = useGLTF(model.modelPath);

    useEffect(() => {
        if(model.name === "Interactive Developer") {
            scene.scene.traverse((child) => {
                if(child.isMesh && child.name === "Object_5") {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 'white',
                    });
                }
            })
        }
    }, [scene]);
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false}/>

      <Float speed={5} floatIntensity={2} rotationIntensity={1}>
        <group scale={model.scale} rotation={model.rotation}>
            <primitive object={scene.scene}/>
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcons
