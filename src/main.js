import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

/*
场景：Scene
相机：Camera
渲染器：Renderer
模型：Mesh
灯光：Light
*/
const scene = new THREE.Scene();
scene.background = new THREE.Color(66, 66, 66);
const camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  0.01,
  200
);
camera.position.set(20, 10, 20);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//环境光
const ambientLight = new THREE.AmbientLight({ color: 0xaaaaaa });
scene.add(ambientLight);

const directionLight = new THREE.DirectionalLight({ color: 0xffffff });
scene.add(directionLight);

const controls = new OrbitControls(camera, renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
// const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(boxMesh);

const gltfLoader = new GLTFLoader();
gltfLoader.load("scene.glb", (gltf) => {
  scene.add(gltf.scene);
});

animate();
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

// setInterval(()=>{
//     renderer.render(scene, camera);
//     controls.update();
// }, 1000 / 24)

// boxMesh.position.set(-2, 0, 0);
