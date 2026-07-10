import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";

const fragmentShader = `
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_scroll;

varying vec2 vUv;

// Simplex 2D noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    // Scroll offset modifies the pattern slightly
    vec2 pos = vec2(st * 3.0);
    pos.y += u_scroll * 2.0;

    // Mouse influence
    float dist = distance(st, u_mouse);
    float mouseInfluence = smoothstep(0.6, 0.0, dist) * 0.4;
    pos -= u_mouse * mouseInfluence; // Pull the liquid towards the mouse

    float n = snoise(pos + u_time * 0.15);
    float n2 = snoise(pos * 2.0 - u_time * 0.1);
    
    float noiseVal = n * 0.5 + n2 * 0.5;

    // Colors: Deep Black, Maroon Red, Amber Gold
    vec3 color1 = vec3(0.03, 0.01, 0.02);   // Dark void
    vec3 color2 = vec3(0.3, 0.02, 0.05);    // Deep red
    vec3 color3 = vec3(0.6, 0.3, 0.05);     // Amber gold

    vec3 finalColor = mix(color1, color2, smoothstep(-1.0, 0.2, noiseVal));
    finalColor = mix(finalColor, color3, smoothstep(0.4, 1.2, noiseVal));

    // Vignette
    float vignette = distance(gl_FragCoord.xy / u_resolution.xy, vec2(0.5));
    finalColor *= smoothstep(0.9, 0.3, vignette);

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const ShaderPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();

  // Mouse tracking
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));
  const scroll = useRef(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * (window.innerWidth / window.innerHeight);
      mouse.current.y = 1.0 - e.clientY / window.innerHeight; // WebGL uses bottom-left origin
    };
    const onScroll = () => {
      // Normalize scroll
      scroll.current = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    };
    
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = state.clock.getElapsedTime();
      materialRef.current.uniforms.u_mouse.value.lerp(mouse.current, 0.05);
      materialRef.current.uniforms.u_scroll.value = THREE.MathUtils.lerp(materialRef.current.uniforms.u_scroll.value, scroll.current, 0.1);
      materialRef.current.uniforms.u_resolution.value.set(size.width, size.height);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[size.width, size.height]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          u_time: { value: 0 },
          u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
          u_scroll: { value: 0 },
          u_resolution: { value: new THREE.Vector2(size.width, size.height) }
        }}
        depthWrite={false}
      />
    </mesh>
  );
};

export const LivingCanvas = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      <Canvas>
        <OrthographicCamera makeDefault position={[0, 0, 1]} zoom={1} />
        <ShaderPlane />
      </Canvas>
      {/* Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.35] mix-blend-overlay" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      }} />
    </div>
  );
};
