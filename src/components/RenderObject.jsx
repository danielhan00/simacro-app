import { Canvas, useLoader } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

// setting up react hook to obtain the 3D model object from a file
function Model(props) {
  const { scene } = useGLTF("/totoro.glb");
  return <primitive object={scene} {...props} />;
}

// Rendering the 3D primitive object
function RenderObject() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45 }}
      style={{ position: "absolute" }}
    >
      <color attach="background" args={["#101010"]} />
      <PresentationControls
        speed={1.5}
        global
        zoom={0.5}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={"sunset"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default RenderObject;
