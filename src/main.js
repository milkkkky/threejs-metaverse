import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
console.log(THREE);

/**
场景：Scene
相机：Camera
渲染器：Renderer
模型：Mesh
灯光：Light
*/
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.01,
  50
);
camera.position.set(0, 0, 5);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(boxMesh);

const gltfLoader = new GLTFLoader();

gltfLoader.load("scene.glb", (gltf) => {
  scene.add(gltf.scene);
});
boxMesh.position.set(-2, 0, 0);
setInterval(() => {
  renderer.render(scene, camera);
  controls.update();
}, 1000 / 24);
