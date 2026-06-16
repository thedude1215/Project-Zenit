import * as THREE from 'three';
import { scene } from './setup.js';

export const station = new THREE.Group(); // Empty container to group multiple meshes together (like station parts)
station.scale.set(0.05, 0.05, 0.05);

const hullMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.3, roughness: 0.5 }); // Material that reacts properly to light, metalness, and roughness
const foilMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.8, roughness: 0.3 }); // Material that reacts properly to light, metalness, and roughness
const trussMat = new THREE.MeshStandardMaterial({ color: 0x555555, metalness: 0.9, roughness: 0.4 }); // Material that reacts properly to light, metalness, and roughness
const solarMat = new THREE.MeshStandardMaterial({ color: 0x051024, metalness: 0.6, roughness: 0.2 }); // Material that reacts properly to light, metalness, and roughness

const mainCore = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 10, 32), hullMat); // Creates a 3D cylinder (radius top, radius bottom, height, radial segments)
mainCore.rotation.z = Math.PI / 2;
station.add(mainCore);

for (let i = -4; i <= 4; i += 2) {
  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.1, 8, 32), foilMat);
  ring.position.x = i;
  ring.rotation.y = Math.PI / 2;
  station.add(ring);
}

const truss = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 30, 8), trussMat); // Creates a 3D cylinder (radius top, radius bottom, height, radial segments)
station.add(truss);

function createSolarArray(y) {
  const group = new THREE.Group(); // Empty container to group multiple meshes together (like station parts)
  group.position.y = y; // Moves the entire group along the Y axis
  const left = new THREE.Mesh(new THREE.BoxGeometry(16, 0.1, 4), solarMat); // Creates a 3D box/cube (width, height, depth)
  const right = new THREE.Mesh(new THREE.BoxGeometry(16, 0.1, 4), solarMat); // Creates a 3D box/cube (width, height, depth)
  left.position.x = -9;
  right.position.x = 9;
  group.add(left, right);
  return group;
}

station.add(createSolarArray(12), createSolarArray(-12));

scene.add(station);