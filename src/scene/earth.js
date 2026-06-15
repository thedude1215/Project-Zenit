 import * as THREE from 'three';
 import { scene } from './setup.js';
 import { EARTH_RADIUS} from '../config.js'


 const loader = new THREE.TextureLoader(); // Utility to load image files into 3D materials 

 export const earth = new THREE.Mesh(
    new THREE.SphereGeometry(EARTH_RADIUS, 64, 64), // Creates a 3d sphere 
    new THREE.MeshStandardMaterial({ // Materials that reacts properlt to light , metalness and roughness

        map: loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'),
        metalness: 0.1,
        roughness: 0.7,


    })
 )

 scene.add(earth);

 