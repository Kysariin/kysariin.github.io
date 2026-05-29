import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, extend, ThreeElement } from "@react-three/fiber";
import { Plane, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

const FluidMaterial = shaderMaterial(
  {
    u_time: 0,
    u_mouse: new THREE.Vector2(0.5, 0.5),
  },
  // vertex — bypass camera matrices so the quad always fills clip space
  /*glsl*/`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  // fragment — domain-warped FBM, kept extremely dark
  /*glsl*/`
    uniform float u_time;
    uniform vec2  u_mouse;
    varying vec2  vUv;

    vec2 hash2(vec2 p) {
      p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
      return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
            dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
        mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
            dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
        u.y
      );
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
      for (int i = 0; i < 4; i++) {
        v += a * noise(p);
        p  = rot * p * 2.0 + vec2(100.0);
        a *= 0.5;
      }
      return v;
    }

    void main() {
      vec2 uv = vUv * 2.5;
      float t = u_time * 0.05;

      // shift the noise field toward the cursor
      uv += (u_mouse - 0.5) * 0.22;

      // two levels of domain warping
      vec2 q = vec2(fbm(uv + t),              fbm(uv + vec2(5.2, 1.3)));
      vec2 r = vec2(fbm(uv + 2.0*q + vec2(1.7, 9.2) + 0.15*t),
                    fbm(uv + 2.0*q + vec2(8.3, 2.8) + 0.126*t));
      float f = fbm(uv + 2.0 * r);

      // cursor glow — wider and brighter
      float glow = exp(-length(vUv - u_mouse) * 5.5) * 0.18;

      float n = (f + 1.0) * 0.5;
      float brightness = pow(n, 2.2) * 0.38 + glow;

      // faint purple tint to match site accent
      vec3 col = vec3(brightness * 0.82, brightness * 0.78, brightness * 1.18);

      gl_FragColor = vec4(col, 1.0);
    }
  `
);

extend({ FluidMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    fluidMaterial: ThreeElement<typeof FluidMaterial>;
  }
}

function FluidPlane() {
  const matRef  = useRef<InstanceType<typeof FluidMaterial>>(null);
  const target  = useRef(new THREE.Vector2(0.5, 0.5));

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.set(
        e.clientX / window.innerWidth,
        1.0 - e.clientY / window.innerHeight,
      );
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    if (!matRef.current) return;
    matRef.current.u_time += delta;
    matRef.current.u_mouse.lerp(target.current, 0.04);
  });

  return (
    // args=[2,2] → vertices span -1..1, matching clip space exactly
    <Plane args={[2, 2]}>
      <fluidMaterial ref={matRef} depthWrite={false} depthTest={false} />
    </Plane>
  );
}

export default function BackgroundCanvas() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <Canvas gl={{ alpha: true }} style={{ background: "transparent" }}>
        <FluidPlane />
      </Canvas>
    </div>
  );
}
