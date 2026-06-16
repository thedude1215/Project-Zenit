import * as THREE from 'three';
import { scene } from './setup.js';
import { EARTH_RADIUS } from '../config.js';

const loader = new THREE.TextureLoader(); // Utility to load image files into 3D materials

export const earth = new THREE.Mesh(
  new THREE.SphereGeometry(EARTH_RADIUS, 64, 64), // Creates a 3D sphere with 64 vertical and horizontal segments
  new THREE.MeshStandardMaterial({ // Material that reacts properly to light, metalness, and roughness
    map: loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'),
    metalness: 0.1,
    roughness: 0.7,
  })
);

scene.add(earth);

const glow = new THREE.Mesh(
   new THREE.SphereGeometry(EARTH_RADIUS + 0.25, 64, 64),
   new THREE.ShaderMaterial({
     vertexShader: `
       varying vec3 n;
       void main() {
         n = normalize(normalMatrix * normal);
         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
       }
     `,
     fragmentShader: `
       varying vec3 n;
       void main() {
         float i = pow(0.65 - dot(n, vec3(0, 0, 1)), 4.0);
         gl_FragColor = vec4(0.5, 0.7, 1.0, 1.0) * i;
       }
     `,
     side: THREE.BackSide, // Renders the inside of the sphere, creating a glowing halo effect
     transparent: true,
     blending: THREE.AdditiveBlending, // Adds colors together, perfect for glowing atmosphere
   })
 );
 
 earth.add(glow);