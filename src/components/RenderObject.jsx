import { useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import "../styles/RenderObject.css";

// setting up react hook to obtain the 3D model object from a file
function Model(props) {
  const { scene } = useGLTF("/totoro.glb");
  return <primitive object={scene} {...props} />;
}

// Rendering the 3D primitive object
function RenderObject() {
  // allows the user to custom choose a background color
  const [backgroundColor, setBackgroundColor] = useState("#101010");
  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <div>
      <label htmlFor="backgroundColor">Background:</label>
      <input
        type="color"
        id="backgroundColor"
        value={backgroundColor}
        onChange={handleBackgroundColorChange}
      />
      <div>
        <Canvas
          dpr={[1, 2]}
          shadows={{}}
          camera={{ fov: 45 }}
          style={{ position: "absolute", backgroundColor }}
        >
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
      </div>
    </div>
  );
}

export default RenderObject;
