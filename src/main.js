import { scene, camera, renderer, controls, clock } from './scene/setup.js';
import * as THREE from 'three';
import { earth } from './scene/earth.js';
import { station } from './scene/station.js'; 
import { ORBIT_RADIUS } from './config.js';


const cube = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2), // Creates a 3D box/cube (width, height, depth)
  new THREE.MeshStandardMaterial({ color: 0x48d6ff }) // Material that reacts properly to light, metalness, and roughness
);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate); // Browser API to call this function before the next screen repaint
  const t = clock.getElapsedTime();
  earth.rotation.y += 0.0005;
  station.position.x = Math.cos(t * 0.1) * ORBIT_RADIUS; // Calculates circular orbit path using cosine
  station.position.z = Math.sin(t * 0.1) * ORBIT_RADIUS; // Calculates circular orbit path using sine
  station.lookAt(earth.position); // Keeps the station always facing the Earth
  controls.target.lerp(station.position, 0.05); // Smoothly pans the camera to follow the moving station
  controls.update();
  renderer.render(scene, camera);
}

animate();
animate();