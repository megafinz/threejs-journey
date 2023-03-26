import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

// Time
// let time = Date.now();
// const clock = new THREE.Clock();

gsap.to(mesh.position, { x: 2, duration: 1, delay: 1 });

// Animations
const tick = () => {
  // Time

  // let currentTime = Date.now();
  // const delta = currentTime - time;
  // time = currentTime;

  // const elapsedTime = clock.getElapsedTime();
  // const delta = clock.getDelta();

  // Update objects
  // mesh.rotation.y += 1 * delta;
  // mesh.position.x = Math.cos(elapsedTime);
  // mesh.position.y = Math.sin(elapsedTime);

  // Render
  renderer.render(scene, camera);

  // Request new frame
  window.requestAnimationFrame(tick);
};

tick();
