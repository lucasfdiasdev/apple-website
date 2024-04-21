import * as THREE from "three";
import { Suspense, RefObject } from "react";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";

import IPhone from "./iPhone";
import Lights from "./lights";
import Loader from "./loader";

interface ModelViewProps {
  index: number;
  groupRef: RefObject<THREE.Group>;
  gsapType: string;
  controlRef: RefObject<THREE.Group>;
  setRotationState: (state: number) => void;
  item: {
    title: string;
    color: string[];
    img: string;
  };
  size: string;
}

const ModelView: React.FC<ModelViewProps> = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={5} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() =>
          setRotationState(
            (controlRef.current as THREE.Object3D)?.getAzimuthalAngle()
          )
        }
      />

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large'`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            item={item}
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
