import * as THREE from 'three';

const hullMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.1 }); // Material that reacts properly to light, metalness, and roughness
const heatShieldMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 }); // Material that reacts properly to light, metalness, and roughness
const solarMat = new THREE.MeshStandardMaterial({ color: 0x1133aa, roughness: 0.4, metalness: 0.8 }); // Material that reacts properly to light, metalness, and roughness

export const visitorGroup = new THREE.Group(); // Empty container to group multiple meshes together (like station parts)
visitorGroup.visible = false;

const capsule = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.8, 1.2, 16), hullMat); // Creates a 3D cylinder (radius top, radius bottom, height, radial segments)
capsule.rotation.x = -Math.PI / 2;
capsule.position.z = 0.6;
visitorGroup.add(capsule);

const shield = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.75, 0.2, 16), heatShieldMat); // Creates a 3D cylinder (radius top, radius bottom, height, radial segments)
shield.rotation.x = -Math.PI / 2;
visitorGroup.add(shield);

const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 1.5, 16), hullMat); // Creates a 3D cylinder (radius top, radius bottom, height, radial segments)
trunk.rotation.x = -Math.PI / 2;
trunk.position.z = -0.85;
visitorGroup.add(trunk);

const leftArray = new THREE.Mesh(new THREE.BoxGeometry(2, 0.05, 0.5), solarMat); // Creates a 3D box/cube (width, height, depth)
const rightArray = leftArray.clone();
leftArray.position.set(-1.5, 0, -0.85);
rightArray.position.set(1.5, 0, -0.85);
visitorGroup.add(leftArray, rightArray);

export const visitorState = {
  phase: 'HIDDEN',
  progress: 0,
};

