/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: polyman (https://sketchfab.com/Polyman_3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-iphone-15-pro-max-black-df17520841214c1792fb8a44c6783ee7
Title: Apple iPhone 15 Pro Max Black
*/

import * as THREE from "three";
import { useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

interface ModelProps {
  item: {
    img: string;
    color: [number, number, number];
  };
}

function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF("/scene.glb");

  const texture = useTexture(props.item.img);

  useEffect(() => {
    Object.entries(materials).map((material) => {
      // these are the material names that can't be changed color
      if (
        material[0] !== "zFdeDaGNRwzccye" &&
        material[0] !== "ujsvqBWRMnqdwPx" &&
        material[0] !== "hUlRcbieVuIiOXG" &&
        material[0] !== "jlzuBkUzuJqgiAK" &&
        material[0] !== "xNrofRCqOXXHVZt"
      ) {
        material[1].color = new THREE.Color(props.item.color[0]);
      }
      material[1].needsUpdate = true;
    });
  }, [materials, props.item]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).ttmRoLdJipiIOmf.geometry
        }
        material={materials.hUlRcbieVuIiOXG}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).DjsDkGiopeiEJZK.geometry
        }
        material={materials.PaletteMaterial001}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).buRWvyqhBBgcJFo.geometry
        }
        material={materials.PaletteMaterial002}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).MrMmlCAsAxJpYqQ_0.geometry
        }
        material={materials.dxCVrUCvYhjVxqy}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).wqbHSzWaUxBCwxY_0.geometry
        }
        material={materials.MHFGNLrDQbTNima}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).QvGDcbDApaGssma.geometry
        }
        material={materials.kUhjpatHUvkBwfM}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).vFwJFNASGvEHWhs.geometry
        }
        material={materials.RJoymvEsaIItifI}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).evAxFwhaQUwXuua.geometry
        }
        material={materials.KSIxMqttXxxmOYl}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).USxQiqZgxHbRvqB.geometry
        }
        material={materials.mcPrzcBUcdqUybC}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).TvgBVmqNmSrFVfW.geometry
        }
        material={materials.pIhYLPqiSQOZTjn}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).GuYJryuYunhpphO.geometry
        }
        material={materials.eShKpuMNVJTRrgg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).pvdHknDTGDzVpwc.geometry
        }
        material={materials.xdyiJLYTYRfJffH}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).CfghdUoyzvwzIum.geometry
        }
        material={materials.jpGaQNgTtEGkTfo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).DjdhycfQYjKMDyn.geometry
        }
        material={materials.ujsvqBWRMnqdwPx}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).usFLmqcyrnltBUr.geometry
        }
        material={materials.sxNzrmuTqVeaXdg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).xXDHkMplTIDAXLN.geometry
        }
        material={materials.pIJKfZsazmcpEiU}
        scale={0.01}
      >
        <meshStandardMaterial roughness={1} map={texture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).vELORlCJixqPHsZ.geometry
        }
        material={materials.zFdeDaGNRwzccye}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).EbQGKrWAqhBHiMv.geometry
        }
        material={materials.TBLSREBUyLMVtJa}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).EddVrWkqZTlvmci.geometry
        }
        material={materials.xNrofRCqOXXHVZt}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).KSWlaxBcnPDpFCs.geometry
        }
        material={materials.yQQySPTfbEJufve}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).TakBsdEjEytCAMK.geometry
        }
        material={materials.PaletteMaterial003}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).IykfmVvLplTsTEW.geometry
        }
        material={materials.PaletteMaterial004}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).wLfSXtbwRlBrwof.geometry
        }
        material={materials.oZRkkORNzkufnGD}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).WJwwVjsahIXbJpU.geometry
        }
        material={materials.yhcAXNGcJWCqtIS}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).YfrJNXgMvGOAfzz.geometry
        }
        material={materials.bCgzXjHOanGdTFV}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).DCLCbjzqejuvsqH.geometry
        }
        material={materials.vhaEJjZoqGtyLdo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).CdalkzDVnwgdEhS.geometry
        }
        material={materials.jlzuBkUzuJqgiAK}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).NtjcIgolNGgYlCg.geometry
        }
        material={materials.PpwUTnTFZJXxCoE}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).pXBNoLiaMwsDHRF.geometry
        }
        material={materials.yiDkEwDSyEhavuP}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).IkoiNqATMVoZFKD.geometry
        }
        material={materials.hiVunnLeAHkwGEo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as { [key: string]: THREE.Mesh }).rqgRAGHOwnuBypi.geometry
        }
        material={materials.HGhEhpqSBZRnjHC}
        scale={0.01}
      />
    </group>
  );
}

export default Model;

useGLTF.preload("/scene.glb");