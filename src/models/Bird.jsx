import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import birdScene from "../assets-2/3d/bird.glb";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Update Y position to simulate a sine wave for bird flight
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if bird reaches a certain endpoint relative to camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backwards and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset bird rotation
      birdRef.current.rotation.y = 0;
    }

    // Update X and Z positions based on direction
    if (birdRef.current.rotation.y === 0) {
      // Forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Backwards
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
