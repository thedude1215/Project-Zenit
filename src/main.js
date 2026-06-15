import { scene, camera, renderer, controls, clock } from './scene/setup.js';
import * as THREE from 'three';

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2), // Creates a 3D box/cube (width, height, depth)
  new THREE.MeshStandardMaterial({ color: 0x48d6ff }) // Material that reacts properly to light, metalness, and roughness
);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate); // Browser API to call this function before the next screen repaint
  const dt = clock.getDelta(); // Time passed since last frame, ensures smooth animation regardless of FPS
  cube.rotation.y += dt;
  controls.update();
  renderer.render(scene, camera);
}

animate();