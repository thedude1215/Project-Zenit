import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { canvas } from '../utils/dom.js';

export const scene = new THREE.Scene(); // Main container for all 3D objects in our world

export const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 50000); // 75 FOV, aspect ratio, near and far clipping planes
camera.position.set(20, 15, 30);

export const renderer = new THREE.WebGLRenderer({ // Engine that draws our 3D scene to the canvas element
  canvas,
  antialias: true, // Smooths jagged edges on 3D models for better quality
  alpha: true, // Transparent background so our HTML CSS gradient shows through
});
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace; // Ensures colors look realistic and match our CSS
renderer.toneMapping = THREE.ACESFilmicToneMapping; // Cinematic lighting tone mapping for a realistic space look
renderer.toneMappingExposure = 1.1;

export const controls = new OrbitControls(camera, renderer.domElement); // Allows the user to click and drag to rotate the camera
controls.enableDamping = true; // Adds smooth deceleration/momentum to camera movement
controls.minDistance = 2;
controls.maxDistance = 60;

scene.add(new THREE.AmbientLight(0x404040, 0.4)); // Soft global light that illuminates all sides of objects slightly

export const sun = new THREE.DirectionalLight(0xffffff, 2); // Acts like the sun, casting strong light in one direction
sun.position.set(50, 20, 30);
scene.add(sun);

export const clock = new THREE.Clock();

window.addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

const starsGeom = new THREE.BufferGeometry();
starsGeom.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    Array.from({ length: 22000 }, () => THREE.MathUtils.randFloatSpread(40000)),
    3
  )
);
scene.add(new THREE.Points(starsGeom, new THREE.PointsMaterial({ size: 2, color: 0xffffff })));
