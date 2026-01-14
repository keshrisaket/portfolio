import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";
import { useMediaQuery } from "react-responsive";

const ContactExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas
      shadows={!isMobile}
      camera={{ position: [0, 3, 7], fov: 45 }}
      dpr={isMobile ? 1 : [1, 1.5]}
      frameloop="demand"
      gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.35} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={1.6} color="#ffd9b3" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow={!isMobile}
        intensity={1.6}
        color="#ffd9b3"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>

      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;